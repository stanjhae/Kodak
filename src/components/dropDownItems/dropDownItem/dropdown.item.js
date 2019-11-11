import React from 'react';
import './dropdown.styles.css';

const DropdownItem = ({ label, onClick }) => (
  <div onClick={onClick} className="dropdownItemContainer">
    <p>{label}</p>
  </div>
);

export default DropdownItem;
