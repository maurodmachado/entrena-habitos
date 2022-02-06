import React from 'react';
import './Footer.css';
import FooterContact from './contact/FooterContact';
import FooterExperience from './experience/FooterExperience';

const Footer = () => {

  return (
    <footer>
      <div className='footer-container' id="contacto">
        <FooterContact />
        <FooterExperience />
      </div>
    </footer>
  );
};

export default Footer;
