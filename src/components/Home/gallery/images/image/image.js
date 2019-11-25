import React from 'react';
import { connect } from 'react-redux';
import { store } from '../../../../../redux/store';
import 'react-image-lightbox/style.css';
import './image.styles.css';
import like from '../../../../../assets/like.png';
import likedIcon from '../../../../../assets/liked.png';
import deleteIcon from '../../../../../assets/delete.png';
import ImageActionButton from '../../../../imageActionButton/image.actionButton';

const { dispatch } = store;

const Image = ({ onClick, image, index, admin }) => {
  const deleteImage = event => {
    event.stopPropagation();
    dispatch.gallery.deleteImage({ image: image.id, index });
  };

  const handleLike = event => {
    event.stopPropagation();
    dispatch.gallery.likeImage({ image: image.id, index });
  };

  return (
    <div style={{ position: 'absolute' }} onClick={onClick} className="galleryImageContainer pointer center">
      <img width={230} className="galleryImage" src={image.url} alt={image.type} />
      <div className="middle center" />
      <div className="buttonsContainer center">
        <ImageActionButton onClick={handleLike} icon={image.liked ? likedIcon : like} />
        {admin && <ImageActionButton onClick={deleteImage} icon={deleteIcon} />}
      </div>
    </div>
  );
};

const mapState = state => ({
  admin: state.admin.credentials.userName,
});

export default connect(mapState)(Image);
