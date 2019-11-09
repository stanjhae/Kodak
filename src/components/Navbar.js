import React from 'react';
import {
  Nav, Icon, Sidenav, Dropdown,
} from 'rsuite';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { store } from '../redux/store';

const { dispatch } = store;

const Navbarr = ({ admin, categories }) => {
  const navigate = (route) => {
    dispatch(push(route));
  };

  const handleLogout = () => {
    dispatch.admin.logout();
  };

  const filterImages = (filter) => {
    navigate(`/${filter.toLowerCase()}`);
    dispatch.gallery.filterImages(filter);
  };
  return (
    <div style={{ position: 'fixed' }}>
      <Sidenav style={{ height: '100vh' }} defaultOpenKeys={['3', '4']} activeKey="1">
        <Sidenav.Body>
          <Nav>
            <Nav.Item eventKey="1" icon={<Icon icon="camera" size="5x" />}>
              F & F (Faisal Fotos)
            </Nav.Item>
            <Nav.Item icon={<Icon icon="home" />} onClick={() => navigate('/')}>Home</Nav.Item>
            <Dropdown eventKey="3" title="Categories" icon={<Icon icon="magic" />}>
              <Dropdown.Item onClick={() => filterImages('')}>All</Dropdown.Item>
              {categories.map(({ label, value }, index) => <Dropdown.Item key={index} onClick={() => filterImages(value)}>{label}</Dropdown.Item>)}
            </Dropdown>
            {!admin && <Nav.Item icon={<Icon icon="sign-in" />} onClick={() => navigate('/login')}>Login</Nav.Item>}
            {admin && (
            <Nav.Item icon={<Icon icon="user" />}>
Hello
              {admin}
            </Nav.Item>
            )}
            {admin && <Nav.Item icon={<Icon icon="pencil" />} onClick={() => navigate('/create')}>Create</Nav.Item>}
            {admin && <Nav.Item icon={<Icon icon="sign-out" />} onClick={handleLogout}>Logout</Nav.Item>}
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </div>
  );
};

const mapState = (state) => ({
  admin: state.admin.credentials.userName,
  categories: state.gallery.categories,
});

export default connect(mapState)(Navbarr);
