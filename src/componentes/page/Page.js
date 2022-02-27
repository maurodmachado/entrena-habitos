import React from 'react';
import Objetivos from '../objetivos/Objetivos';
import Planes from '../planes/Planes';
import Nosotros from '../nosotros/Nosotros';
import { Box } from '@material-ui/core';
import Cover from '../cover/Cover';
import Footer from '../footer/Footer';
import imgBack from '../../media/imgPlan1.jpg';
import Navbar from '../navbar/Navbar';

const Page = ({informacion}) => {
  
  return <Box style={{paddingTop:80, height:'100%'}}>
  <a
  href={`https://wa.me/${informacion.telefono}`}
  class="whatsapp_float"
  target="_blank"
  rel="noopener noreferrer"
>
  <i class="fa fa-whatsapp whatsapp-icon"></i>
</a>
    
    <Navbar tipo={true} />
  <img src={imgBack}  height="100%" width="100%" style={{display:'flex', objectFit:'cover', position:'fixed', zIndex: -100}} alt="EntrenaHabitos"/>
    <Cover />
    <Nosotros infoNosotros={informacion.infoNosotros}/>
    <Planes objetivosText1={informacion.objetivosText1} objetivosText2={informacion.objetivosText2} objetivosTitle1={informacion.objetivosTitle1} objetivosTitle2={informacion.objetivosTitle2}/>
    <Objetivos sloganTitle={informacion.sloganTitle} sloganText={informacion.sloganText}/>
    <Footer telefono={informacion.telefono} instagram={informacion.instagram}/>
  </Box>;
};

export default Page;
