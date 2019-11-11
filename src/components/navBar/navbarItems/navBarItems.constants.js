import { store } from '../../../redux/store';

const { dispatch } = store;

const handleLogout = () => {
  dispatch.admin.logout();
};

const showCategories = () => {
  const categoriesDropdownStyle = document.getElementById('categoriesDropdown').style.display;
  if (categoriesDropdownStyle === 'flex') {
    document.getElementById('categoriesDropdown').style.display = 'none';
  } else {
    document.getElementById('categoriesDropdown').style.display = 'flex';
  }
};

const navBarItems = admin =>
  admin
    ? [
        { name: 'Home' },
        {
          name: 'Categories',
          onClick: showCategories,
        },
        { name: 'upload' },
        {
          name: `Hello ${admin
            .charAt(0)
            .toUpperCase()
            .concat(admin.slice(1))}`,
        },
        { name: 'Logout', onClick: handleLogout },
      ]
    : [{ name: 'Home' }, { name: 'Categories', onClick: showCategories }, { name: 'Login' }];

export default navBarItems;
