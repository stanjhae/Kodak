import React from 'react';
import './aboutPage.styles.css';
import { Icon } from 'rsuite';

const AboutPage = () => (
  <div className="aboutPageContainer">
    <div className="headerContainer center">
      <h1>About Faisal</h1>
    </div>
    <div className="contentContainer">
      <h6>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
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
