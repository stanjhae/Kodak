const toggleNav = () => {
  document.getElementById('sideNav').style.width = '0';
  document.getElementById('mainAppContainer').style.marginLeft = '0';
};

const openNav = () => {
  document.getElementById('sideNav').style.width = '250px';
  document.getElementById('mainAppContainer').style.marginLeft = '250px';
};
