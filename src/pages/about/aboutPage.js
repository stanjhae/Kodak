import React from 'react';
import './aboutPage.styles.css';
import { Icon } from 'rsuite';

const AboutPage = () => (
  <div className="aboutPageContainer">
    <div className="headerContainer center">
      <h1>About Faisal</h1>
    </div>
    <div className="contentContainer">
      <h6>Hello, my name is Faisal.
      </h6>
    </div>
    <footer className="footerContainer center">
      <a
        href="https://www.facebook.com/profile.php?id=100008175671186"
        target="_blank"
        rel="noreferrer noopener"
        className="iconContainer pointer"
      >
        <Icon size="2x" icon="facebook" />
      </a>
      <a
        href="https://twitter.com/mouktar_faisal"
        target="_blank"
        rel="noreferrer noopener"
        className="iconContainer pointer"
      >
        <Icon size="2x" icon="twitter" />
      </a>{' '}
    </footer>
  </div>
);

export default AboutPage;
