import React from 'react';
import lottie from 'lottie-web';
import { Link } from 'react-router-dom';
import './logo.css';
import { store } from '../../redux/store';

const { dispatch } = store;

const Logo = () => {
  const resetFilter = () => {
    dispatch.gallery.filterImages('');
  };

  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById('logo'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'https://assets2.lottiefiles.com/datafiles/nPMUxybkfdHjXBx/data.json',
    });
  }, []);

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions
    <div onClick={resetFilter} className="logoContainer">
      <Link to="/" id="logo" />
    </div>
  );
};

export default Logo;
