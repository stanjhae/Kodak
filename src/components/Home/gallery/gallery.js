import React, { useState } from 'react';
import { connect } from 'react-redux';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Images from './images/images';
import NoImage from '../../noImage/noImage';

const Gallery = ({ images }) => {
  const [photo, setPhoto] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {images.length ? <Images images={images} onClick={() => setIsOpen(true)} /> : <NoImage />}
      {isOpen && (
        <Lightbox
          mainSrc={images[photo].url}
          nextSrc={photo + 1 && images[(photo + 1) % images.length].url}
          prevSrc={images[(photo + images.length - 1) % images.length].url}
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={() => setPhoto((photo + images.length - 1) % images.length)}
          onMoveNextRequest={() => setPhoto((photo + 1) % images.length)}
        />
      )}
    </>
  );
};

const mapState = state => ({
  images: state.gallery.filter ? state.gallery.filtered : state.gallery.images,
});

export default connect(mapState)(Gallery);
