import React from 'react';
import './mobile.styles.css';
import lottie from 'lottie-web';

const Mobile = () => {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.getElementById('laptop'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'https://assets7.lottiefiles.com/datafiles/6WfDdm3ooQTEs1L/data.json\n',
    });
  }, []);
  return (
    <div className="mobileContainer">
      <h4>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        Hmmm... <br />
        <br /> You&apos;d need a bigger screen to view this website
      </h4>
      <div className="logoContainer" id="laptop" />
    </div>
  );
};

export default Mobile;
