import React from 'react';
import Objetivos from '../objetivos/Objetivos';
import Planes from '../planes/Planes';
import Nosotros from '../nosotros/Nosotros';
import { Box } from '@material-ui/core';
import Cover from '../cover/Cover';
import Footer from '../footer/Footer';
import imgBack from '../../media/imgPlan1.jpg'

const Page = () => {
  
  return <Box style={{paddingTop:80}}>
  <img src={imgBack}  height="100%" width="100%" style={{display:'flex', objectFit:'cover', position:'fixed', zIndex: -100}} />
    <Cover />
    <Nosotros/>
    <Planes/>
    <Objetivos/>
    <Footer />
  </Box>;
};

export default Page;
