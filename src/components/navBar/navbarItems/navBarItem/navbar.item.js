import React from 'react';
import './navBarItem.css';
import { withRouter } from 'react-router-dom';
import DropDownItems from '../../../dropDownItems/dropdown.items';

const NavBarItem = ({ name, onClick, history: { push }, display }) => (
  <>
    <div
      onClick={onClick || (() => push(name === 'Home' ? '/' : name === 'Hello Faisal' ? 'about' : name.toLowerCase()))}
      className="navBarItemContainer pointer"
    >
      {name}
    </div>
    {name === 'Categories' && <DropDownItems display={display} />}
  </>
);

export default withRouter(NavBarItem);
