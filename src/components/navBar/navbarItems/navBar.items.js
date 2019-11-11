import React from 'react';
import { connect } from 'react-redux';
import NavBarItem from './navBarItem/navbar.item';
import './navBarItems.css';
import navBarItems from './navBarItems.constants';

const NavBarItems = ({ admin }) => (
  <div className="navBarItemsContainer">
    {navBarItems(admin).map(({ name, onClick }) => (
      <NavBarItem onClick={onClick} key={name} name={name} />
    ))}
  </div>
);

const mapState = state => ({
  admin: state.admin.credentials.userName,
});

export default connect(mapState)(NavBarItems);
