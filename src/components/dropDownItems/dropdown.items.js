import React from 'react';
import { connect } from 'react-redux';
import './dropDown.items.styles.css';
import { push } from 'connected-react-router';
import { store } from '../../redux/store';
import DropdownItem from './dropDownItem/dropdown.item';

const { dispatch } = store;

const navigate = route => {
  dispatch(push(route));
};

const filterImages = value => {
  navigate(`/${value.toLowerCase()}`);
  dispatch.gallery.filterImages(value);
};

const DropdownItems = ({ categories }) => (
  <div id="categoriesDropdown" style={{ display: 'flex' }} className="dropdownItemsContainer">
    <DropdownItem label="All" onClick={() => filterImages('')} />
    {categories.map(({ label, value }, index) => {
      return <DropdownItem key={index.toString()} label={label} onClick={() => filterImages(value)} />;
    })}
  </div>
);

const mapState = state => ({
  categories: state.gallery.categories,
});

export default connect(mapState)(DropdownItems);
