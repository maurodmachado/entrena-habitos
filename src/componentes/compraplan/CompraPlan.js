import { Box, Button, CircularProgress, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import imgBack from '../../media/imgPlan4.jpg'
import imgQR from '../../media/qr.png'
import clienteAxios from '../../config/axios';
import {useLocation} from "react-router-dom";
import Footer from '../footer/Footer'
import planesEntrenamiento from '../planes/planes.json'

const useStyles = makeStyles((theme) => ({
  contenido: {
    backgroundColor:'var(--primary-color-shadow)',
    flexDirection:'column', 
    alignItems:'center', 
  },
    containerPlan:{
        backgroundColor:'white',
        paddingTop:80, 
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        paddingLeft:20,
        paddingRight:20,
        [theme.breakpoints.up("sm")]: {
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 29,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 33,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 38,
          marginLeft:200,
          marginRight:200,
        },
    },
    title: {
      lineHeight: 1.5,
      fontSize: 25,
      padding: 20,
      fontWeight: "bold",
      fontFamily: "Montserrat",
      [theme.breakpoints.up("sm")]: {
        fontSize: 25,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 29,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 33,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 38,
      },
    },
    descripcion: {
        fontSize: 15,
        padding: 25,
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
    
    descripcionLarga: {
        fontSize: 20,
        padding: 19,
        fontFamily: "Montserrat",
        [theme.breakpoints.up("sm")]: {
          fontSize: 20,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 15,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 21,
        },
        

    },
    botonYQR:{
      display:'flex',
      flexDirection:'column',
      backgroundColor:'white',
      marginLeft:0,
      marginRight:0,
      borderBottomLeftRadius:100,
      borderBottomRightRadius:100,
      height:'auto',
      justifyContent:'center',
      alignItems:'center',
      [theme.breakpoints.up("sm")]: {
      },
      [theme.breakpoints.up("md")]: {
      },
      [theme.breakpoints.up("lg")]: {
      },
      [theme.breakpoints.up("xl")]: {
        marginLeft:200,
        marginRight:200,
      },
    }
}))

const CompraPlan = () => {

  let location = useLocation();
    const classes = useStyles();
    const [plan, setPlan] = useState(planesEntrenamiento[0]);
    const [url, setUrl] = useState();
    const [qr, setQr] = useState();
    const [loadingQr, setLoadingQr] = useState(true);

    const getUrl = async (plan) => {
      const { title, precio } = plan;
      try {
        const {data} = await clienteAxios.post(
          '/checkout', {name: title, price: precio, unit: 1}, {
        }
        );
        setUrl(data.url)
    }catch(e){
      console.log(e)
    }
  }
    const getQR = async (plan) => {
      
    window.scrollTo(0, 0)
      setLoadingQr(true);
      const { title, precio, descripcion } = plan;
      try {
        const {data} = await clienteAxios.post(
          '/checkout/qr', 
          {
            external_reference: "order-id-1234",
            title: `Compra ${title}`,
            description: descripcion,
            notification_url: "https://www.yourserver.com",
            total_amount: precio,
            items: [
                {
                    title: title,
                    description: descripcion,
                    unit_price: precio,
                    quantity: 1,
                    unit_measure: "unit",
                    total_amount: precio
                }
            ]
        }
        );
        setQr(data.qr_data.split(' ')[0]);
        setLoadingQr(false);
    }catch(e){
      console.log(e)
    }

  }

    useEffect(() => {
      if(location.state === null){
        getUrl(plan);
        getQR(plan);
      }else{
        setPlan(location.state.plan)
        getUrl(location.state.plan);
        getQR(location.state.plan);
      }
    }, [plan]);

  return <>
  <img src={imgBack}  height="100%" width="100%" style={{display:'flex', objectFit:'cover', position:'fixed', zIndex: -100}} alt="EntrenaHabitos"/>
      {plan !== undefined? 
      <>
      <Box  className={classes.contenido}>
          <Box className={classes.containerPlan}>
        <Typography className={classes.title}>{plan.title}</Typography>
        <Box>
          <Typography className={classes.descripcion}>
              {plan.descripcion}
          </Typography>
          <Typography className={classes.descripcionLarga}>
              {plan.descripcionLarga}
          </Typography>
      </Box>
      <Box className={classes.title}>
          Precio: $ {plan.precio}
      </Box>
      
      </Box>
      
      <Box className={classes.botonYQR}>
      <Button onClick={()=> getQR(plan)} style={{marginBottom:30, backgroundColor:'#009ee3', padding: 15, fontFamily: "Montserrat", fontSize: 22,fontWeight:'bold',
      lineHeight: 2.70, borderRadius: '0.28em', color: '#fff', cursor: 'pointer', border: 0}}>Generar QR</Button>
       <Box sx={{display:'flex', height:300, justifyContent:'center', alignItems:'center'}}>{loadingQr ? <CircularProgress /> : <img src={`https://chart.apis.google.com/chart?cht=qr&chs=300x300&chl=${qr}`} width="300" height="300" alt="Entrena Habitos" />}</Box>
      <Button onClick={()=> window.open(url)} style={{marginBottom:30, backgroundColor:'#009ee3', padding: 15, fontFamily: "Montserrat", fontSize: 22,fontWeight:'bold',
      lineHeight: 2.70, borderRadius: '0.28em', color: '#fff', cursor: 'pointer', border: 0}}>Pagar en MercadoPago.com</Button>
      </Box>
      </Box>  
      <Footer />
      </>
      :
      <Typography>Loading...</Typography>
      }
  </>;
};

export default CompraPlan;
