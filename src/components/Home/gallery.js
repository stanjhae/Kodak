import React, { useState } from 'react';
import { connect } from 'react-redux';
import MagicGrid from 'magic-grid-react';
import { Button } from 'rsuite';
import Lightbox from 'react-image-lightbox';
import { store } from '../../redux/store';

const { dispatch } = store;

const Gallery = ({ images, admin }) => {
  const [photo, setPhoto] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const deleteImage = (image) => {
    dispatch.gallery.deleteImage(image);
  };
  return (
    <>
      {images.length ? (
        <MagicGrid animate useMin gutter={4} maxColumns={3}>
          {images.map(({ url, type }, index) => (
            <div style={{ position: 'absolute' }} key={url}>
              <img width={380} src={url} alt={type} onClick={() => setIsOpen(true)} />
              {admin && <Button onClick={() => deleteImage(index)}>Delete</Button>}
            </div>
          ))}
        </MagicGrid>
      ) : <h3>No Images</h3>}
      {isOpen && (
      <Lightbox
        mainSrc={images[photo].url}
        nextSrc={photo+1 && images[(photo + 1) % images.length].url}
        prevSrc={images[(photo + images.length - 1) % images.length].url}
        onCloseRequest={() => setIsOpen(false)}
        onMovePrevRequest={() => setPhoto((photo + images.length - 1) % images.length)}
        onMoveNextRequest={() => setPhoto((photo + 1) % images.length)}
      />
      )}
    </>
  );
};

const mapState = (state) => ({
  images: state.gallery.filter ? state.gallery.filtered : state.gallery.images,
  admin: state.admin.credentials.userName,
});

export default connect(mapState)(Gallery);
