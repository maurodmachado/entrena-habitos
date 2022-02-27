import { Typography } from '@material-ui/core';
import React from 'react';
import SocialNetworkItem from './SocialNetworkItem';

const FooterContact = ({telefono, instagram}) => {
  const socialNetworks = [
    // {
    //   network: 'facebook',
    //   url: 'https://www.facebook.com/MedicaTGrow/',
    // },
    {
      network: 'whatsapp',
      url: `https://api.whatsapp.com/send/?phone=549${telefono}`,
    },
    { 
      network: 'instagram',
      url: `https://instagram.com/${instagram}`,
    }
  ];

  return (
    <div className='footer-row'>
    <div className='footer-info'>
        <Typography style={{fontFamily: "Poppins", fontSize:50, letterSpacing:1.2}} >Entrená Hábitos</Typography>
        <Typography style={{fontFamily: "Poppins", fontSize:25, letterSpacing:2}}>Desafiá tus límites</Typography>
      </div>
      <div className='footer-contact'>
      <Typography style={{fontFamily: "Montserrat", fontSize:20}}>Nuestras redes</Typography>
        <div className='sns-links'>
          {socialNetworks.length !== 0 ? (
            socialNetworks.map((socialNetwork, index) => (
              <SocialNetworkItem
                key={index}
                network={socialNetwork.network}
                url={socialNetwork.url}
                color={socialNetwork.color}
              />
            ))
          ) : (
            <></>
          )}
          </div>
      </div>
    </div>
  );
};

export default FooterContact;
