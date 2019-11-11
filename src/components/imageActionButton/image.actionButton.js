import React from 'react';
import './image.actionButton.styles.css';

const ImageActionButton = ({ icon, onClick }) => (
  <div onClick={onClick} className="imageActionButtonContainer center pointer">
    <img alt="" className="actionButtonIcon" src={icon} />
  </div>
);

export default ImageActionButton;
