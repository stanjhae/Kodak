import React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { Nav, Sidenav, Dropdown } from 'rsuite';
import { store } from '../../redux/store';
import './navbar.css';
import Logo from './logo';

const { dispatch } = store;

const Navbar = ({ admin, categories }) => {
  const navigate = route => {
    dispatch(push(route));
  };

  const handleLogout = () => {
    dispatch.admin.logout();
  };

  const filterImages = filter => {
    navigate(`/${filter.toLowerCase()}`);
    dispatch.gallery.filterImages(filter.toLowerCase());
  };

  return (
    <div id="sideNav" className="sideBarContainer">
      <Sidenav appearance="inverse" style={{ height: '100vh' }} activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Logo />
            <Nav.Item
              onClick={() => {
                navigate('/');
                filterImages('');
              }}
            >
              Home
            </Nav.Item>
            <Nav.Item onClick={() => navigate('/about')}>About</Nav.Item>
            <Dropdown eventKey="3" title="Categories">
              <Dropdown.Item className="dropDownItem" onClick={() => filterImages('')}>
                All
              </Dropdown.Item>
              {categories.map(({ label, value }) => (
                <Dropdown.Item className="dropDownItem" key={`${label}-${value}`} onClick={() => filterImages(value)}>
                  {label}
                </Dropdown.Item>
              ))}
            </Dropdown>
            {!admin && <Nav.Item onClick={() => navigate('/login')}>Login</Nav.Item>}
            {admin && <Nav.Item onClick={() => navigate('/upload')}>Upload</Nav.Item>}
            {admin && <Nav.Item onClick={handleLogout}>Logout</Nav.Item>}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

const mapState = state => ({
  admin: state.admin.credentials.userName,
  categories: state.gallery.categories,
});

export default connect(mapState)(Navbar);
