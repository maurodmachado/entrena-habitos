import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import imgBack from '../../media/imgPlan4.jpg';
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar';
import { Link as LinkRouter } from 'react-router-dom';
import SocialNetworkItem from '../footer/contact/SocialNetworkItem';

const useStyles = makeStyles((theme) => ({
  allcontent: {
    display:'flex',
    height:'100%',
    flexDirection:'column'
  },
  contenido: {
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center', 
    display:'flex',
    minHeight:'80vh',
    height:'100%',
    [theme.breakpoints.up("sm")]: {
      flexDirection:'column', 
    },
    [theme.breakpoints.up("md")]: {
      flexDirection:'column', 
      fontSize: 29,
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection:'row', 
      fontSize: 33,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 38,
      flexDirection:'row', 
    },
  },
    descripcion: {
        fontSize: 25,
        textAlign:'center',
        fontFamily: "Montserrat",
        fontWeight:'bold',
        [theme.breakpoints.up("sm")]: {
          fontSize: 25,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 25,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 25,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 25,
        },

    },
    title: {
        fontSize: 29,
        textAlign:'center',
        fontFamily: "Montserrat",
        fontWeight:'bold',
        color:'var(--primary-color-solid)',
        [theme.breakpoints.up("sm")]: {
          fontSize: 29,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 29,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 29,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 29,
        },

    },
    text: {
        fontSize: 20,
        textAlign:'center',
        fontFamily: "Montserrat",
        color:'var(--primary-color-solid)',
        [theme.breakpoints.up("sm")]: {
          fontSize: 20,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 20,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 20,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 20,
        },

    },
    backButton:{
      display:'flex',
      position:'absolute',
      backgroundColor:'#009ee3',
      left:10,
      top:90,
      fontFamily: "Montserrat",
      fontSize: 18,
      fontWeight:'bold',
      lineHeight: 1.5,
      borderRadius: '0.28em',
      color: '#fff',
      cursor: 'pointer',
      border: 0,
      "&:hover": {
        backgroundColor: 'var(--primary-color-solid)',
        color: 'white',
      }
    }
}))

const CompraPlanPendiente = (telefono) => {
  const classes = useStyles();

  return <>
  <Navbar tipo={false}/>
  <img src={imgBack}  height="100%" width="100%" style={{display:'flex', objectFit:'cover', position:'fixed', zIndex: -100}} alt="EntrenaHabitos"/>
  <Box className={classes.allcontent}>
      <Box  className={classes.contenido}>
        
          <LinkRouter to="/">
          <Button className={classes.backButton}>Página Principal</Button>
      </LinkRouter>
      <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
      <Typography className={classes.title} >¡ El pago está pendiente !</Typography>
      
        <Typography className={classes.descripcion}>Enviaremos a tu mail los pasos para ingresar a la plataforma y acceder a tu plan una vez acreditado. Muchas gracias por confiar!</Typography>
        <Typography className={classes.text}>Si deseas acelerar el proceso de comprobación de pago, envía el comprobante a nuestro WhatsApp</Typography>
        <br/>
        <SocialNetworkItem
                network="whatsapp"
                url={`https://api.whatsapp.com/send/?phone=549${telefono}`}
              />
        </Box>
    </Box> 
      <Footer />
      </Box>
  </>;
};

export default CompraPlanPendiente;
