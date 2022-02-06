import { Box, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import planesEntrenamiento from '../planes/planes.json';
import imgBack from '../../media/imgPlan4.jpg'


const useStyles = makeStyles((theme) => ({
    containerPlan:{
        backgroundColor:'white',
        paddingTop:80, display:'flex',
        flexDirection:'column',
        alignItems:'center',
        height:'100%',
        width:'100%',
        [theme.breakpoints.up("sm")]: {
            width:'100%',
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 29,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 33,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 38,
          width:'60%',
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

    }
}))

const CompraPlan = () => {
    // const mercadopago = require("mercadopago");
    // // Agrega credenciales
    // mercadopago.configure({
    // access_token: "TEST-3512637281862943-082820-69fd02c3b2ff52a67aee5dbf03c62e9e-282971304",
    // });


    const classes = useStyles();
    const {id} = useParams();
    const planes = planesEntrenamiento;
    const [plan, setPlan] = useState(undefined);

    // const generarPago = () => {
    //     let preference = {
    //         items: [
    //           {
    //             title: plan.title,
    //             unit_price: plan.price,
    //             quantity: 1,
    //           },
    //         ],
    //       };
          
    //       mercadopago.preferences
    //         .create(preference)
    //         .then(function (response) {
    //           // En esta instancia deberás asignar el valor dentro de response.body.id por el ID de preferencia solicitado en el siguiente paso
    //         })
    //         .catch(function (error) {
    //           console.log(error);
    //         });
    // }

    useEffect(() => {
        setPlan(planes.find(plan =>  plan.id.toString() === id))
    }, [id, planes]);

  return <>
  <img src={imgBack} style={{position:'fixed', zIndex:-1, width:'100%'}} alt="EntrenaHabitos"/>
      {plan !== undefined ? 
      <><Box sx={{bgcolor:'transparent', paddingTop:80, display:'flex', flexDirection:'column', alignItems:'center', height: '100vh'}}>
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
      
      </Box>
    </>
      :
      <Typography>Loading...</Typography>
      }
  </>;
};

export default CompraPlan;
