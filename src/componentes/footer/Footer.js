import React from 'react';
import './Footer.css';
import FooterContact from './contact/FooterContact';
import FooterExperience from './experience/FooterExperience';

const Footer = ({telefono, instagram}) => {

  return (
      <div className='footer-container' id="contacto">
        <FooterContact telefono={telefono} instagram={instagram}/>
        <FooterExperience telefono={telefono} />
      </div>
  );
};

export default Footer;
