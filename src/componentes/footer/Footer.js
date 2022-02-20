import React from 'react';
import './Footer.css';
import FooterContact from './contact/FooterContact';
import FooterExperience from './experience/FooterExperience';

const Footer = () => {

  return (
      <div className='footer-container' id="contacto">
        <FooterContact />
        <FooterExperience />
      </div>
  );
};

export default Footer;
