import React from 'react';
import { connect } from 'react-redux';
import MagicGrid from 'magic-grid-react';
import Image from './image/image';

const Images = ({ images, onClick }) => {
  return (
    <div className="galleryContainer">
      <MagicGrid animate useMin gutter={10} maxColumns={6}>
        {images.map(({ url, type }, index) => {
          return <Image index={index} onClick={onClick} type={type} url={url} key={index.toString()} />;
        })}
      </MagicGrid>
    </div>
  );
};

const mapState = state => ({
  images: state.gallery.filter ? state.gallery.filtered : state.gallery.images,
});

export default connect(mapState)(Images);
