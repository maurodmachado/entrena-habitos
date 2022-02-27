import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import imgBack from '../../media/imgPlan4.jpg';
import {useLocation, useNavigate} from "react-router-dom";
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar';
import mp from '../../media/mercadopago.svg'

const useStyles = makeStyles((theme) => ({
  allcontent: {
    display:'flex',
    height:'100%',
    flexDirection:'column'
  },
  contenido: {
    backgroundColor:'white',
    flexDirection:'column', 
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
    containerPlan:{
        minHeight:700,
        height: 'auto',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        width:'100%',
        paddingLeft:20,
        paddingRight:20,
        fontSize: 29,
        [theme.breakpoints.up("sm")]: {
          fontSize: 29,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 29,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 30,
          width:'70%',
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 38,
          paddingLeft:100,
          width:'70%',
        },
    },
    title: {
      lineHeight: 1.5,
      fontSize: 33,
      padding: 20,
      fontWeight: "bold",
      fontFamily: "Montserrat",
      [theme.breakpoints.up("sm")]: {
        fontSize: 33,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 37,
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: 40,
      },
      [theme.breakpoints.up("xl")]: {
        fontSize: 45,
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
    descripcionLarga: {
        fontSize: 19,
        padding: 19,
        fontFamily: "Montserrat",
        [theme.breakpoints.up("sm")]: {
          fontSize: 19,
        },
        [theme.breakpoints.up("md")]: {
          fontSize: 18,
        },
        [theme.breakpoints.up("lg")]: {
          fontSize: 21,
        },
        [theme.breakpoints.up("xl")]: {
          fontSize: 21,
        },
        

    },
    botonYQR:{
      display:'flex',
      flexDirection:'column',
      paddingTop:0,
      paddingRight:0,
      height: 'auto',
      justifyContent:'center',
      alignItems:'center',
      [theme.breakpoints.up("sm")]: {
        paddingTop:0,
        paddingRight:0,
      },
      [theme.breakpoints.up("md")]: {
        paddingTop:90,
        paddingRight:50,
      },
      [theme.breakpoints.up("lg")]: {
        paddingTop:90,
        paddingRight:80,
      },
      [theme.breakpoints.up("xl")]: {
        paddingTop:90,
        paddingRight:100,
      },
    },
    button: {
      backgroundColor:'#009ee3',
      padding: 15,
      fontFamily: "Montserrat",
      fontSize: 20,
      fontWeight:'bold',
      lineHeight: 1.5,
      borderRadius: '0.28em',
      color: 'white',
      cursor: 'pointer',
      border: 0,
      "&:disabled": {
        backgroundColor: '#a1b2c3',
        color: 'white',
      },
      "&:hover": {
        backgroundColor: 'var(--primary-color-solid)',
        color: 'white',
      }
    },
    buttonCancelar: {
      backgroundColor:'#d9534f',
      padding: 5,
      fontFamily: "Montserrat",
      fontSize: 15,
      fontWeight:'bold',
      lineHeight: 1.2,
      borderRadius: '0.28em',
      color: 'white',
      cursor: 'pointer',
      border: 0,
      marginLeft:5,
      "&:disabled": {
        backgroundColor: '#a1b2c3',
        color: 'white',
      },
      "&:hover": {
        backgroundColor: 'var(--primary-color-solid)',
        color: 'white',
      }
    },
    backButton:{
      display:'flex',
      position:'absolute',
      backgroundColor:'#009ee3',
      left:10 ,
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

const CompraPlan = ({telefono}) => {

  let location = useLocation();
    const classes = useStyles();
    
    let navigate = useNavigate();
    // const [visible, setVisible] = useState(false);
    // const [nombres, setNombres] = useState("");
    // const [apellidos, setApellidos] = useState("");
    // const [dni, setDni] = useState("");
    // const [email, setEmail] = useState("");
    // const [codigoArea, setCodigoArea] = useState("");
    // const [telefono, setTelefono] = useState("");
    // const [codigoPostal, setCodigoPostal] = useState("");
    // const [calle, setCalle] = useState("");
    // const [nroCalle, setNroCalle] = useState("");
    // const [loading, setLoading] = useState(false);

    const [plan, setPlan] = useState();
  //   const [url, setUrl] = useState();
  //   // const [qr, setQr] = useState();
  //   // const [loadingQr, setLoadingQr] = useState(true);
  //   const getUrl = async (plan) => {
  //     console.log(plan);
  //     const { nombre, precio, _id, descripcion_corta } = plan;
  //     const items = [ 
  //       {
  //         id: _id,
  //         title: nombre,
  //         description: descripcion_corta,
  //         quantity: 1,
  //         unit_price: Number(precio)
  //       }];
    
  //     try {
  //       const response = await clienteAxios.post('/checkout/create-preference', {items, comprador:{nombres, apellidos, dni, email, codigoArea, telefono, codigoPostal, calle, nroCalle}});
  //       console.log(response);
  //       setUrl(response.data)
  //   }catch(e){
  //     console.log(e)
  //   }
  // }

  // const generarLinks = () => {
  //   // getQR(plan)       
  //   setLoading(true);
  //   getUrl(plan);
  //   setTimeout(() => {
  //     setLoading(false);
  //     setVisible(true)
  //   }, 2000);
  // }

  // const cancelarPago = () => { 
  //   setVisible(false);
  // }

  // const verificarCampos = () =>{
  //   if(nombres === "" || apellidos === "" || (email === "" || !email.includes('@') || !email.includes('.')) || dni === "" || codigoArea === "" || telefono === "" || codigoPostal === "" || calle === "" || nroCalle === ""){
  //     return true;
  //   }
  //   return false;
  // }

  //   const getQR = async (plan) => {
  //     setLoadingQr(true);
  //     const { title, precio, descripcion } = plan;
  //     try {
  //       const {data} = await axios.post(
  //         '/checkout/qr', 
  //         {
  //           external_reference: "order-id-1234",
  //           title: `Compra ${title}`,
  //           description: descripcion,
  //           notification_url: "https://hookbin.com/qB0D3PWWM9CEwPllaqwP",
  //           total_amount: precio,
  //           items: [
  //               {
  //                   title: title,
  //                   description: descripcion,
  //                   unit_price: precio,
  //                   quantity: 1,
  //                   unit_measure: "unit",
  //                   total_amount: precio
  //               }
  //           ]
  //       }
  //       );
  //       setQr(data); 
  //       setLoadingQr(false);
  //   }catch(e){
  //     console.log(e)
  //   }        
  // }

    useEffect(() => {
      if(location.state === null){    
        navigate("/");
      }else{
        console.log(location.state.plan);
        setPlan(location.state.plan);
      }
    }, [navigate, location.state]);

  return <>
  <Navbar tipo={false}/>
  <a
  href={`https://wa.me/${telefono}`}
  class="whatsapp_float"
  target="_blank"
  rel="noopener noreferrer"
>
  <i class="fa fa-whatsapp whatsapp-icon"></i>
</a>
  <img src={imgBack}  height="100%" width="100%" style={{display:'flex', objectFit:'cover', position:'fixed', zIndex: -100}} alt="EntrenaHabitos"/>
      {plan !== undefined? 
      
      <Box className={classes.allcontent}>
      <Box  className={classes.contenido}>
        
          <Box className={classes.containerPlan}>
          <Button className={classes.backButton} onClick={() => {window.history.back()}}>Atrás</Button> 
      <br/>
        <Typography className={classes.title}>{plan.nombre}</Typography>
        <Box>
          <Typography className={classes.descripcion}>
              {plan.descripcion_corta}
          </Typography>
          <Typography className={classes.descripcionLarga}>
              {plan.descripcion_larga}
          </Typography>
      </Box>
      <Box className={classes.title}>
          Precio: $ {plan.precio}
      </Box>
      
      </Box>
      
       
      <Box className={classes.botonYQR}>
      <Button className={classes.button} onClick={()=> window.open(plan.linkPago)} > 
      <img src={mp} height="40" style={{marginRight:10}} alt="EntrenaHabitos"/>
      Pagar con mercadopago
      </Button>
      {/* <Typography className={classes.descripcionLarga}>
              Datos comprador
         {visible ? <img src={ok} height="25" style={{marginLeft:10}} alt="EntrenaHabitos"/> : <></>}
          </Typography> */}
     
      {/* <Box
      component="form"
      sx={{
        width:'90%'
        ,
        '& .MuiTextField-root': { padding:8, width: '50%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          disabled={visible}
          error={nombres.length !== 0 ? false : true }
          required
          variant="outlined"
          label="Nombres"
          value={nombres}
          onChange={(e) => setNombres(e.target.value)}
        />
        <TextField
          disabled={visible}
          error={apellidos.length !== 0 ? false : true }
          required
          variant="outlined"
          label="Apellidos"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
        />

</div>
        
    </Box> */}
    {/* <Box
      component="form"
      sx={{
        width:'90%'
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          disabled={visible}
          error ={email.length !== 0 && email.includes('@') ? false : true }
          required
          variant="outlined"
          label="Email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding:8, width: '70%' }}
        />
        <TextField
          disabled={visible}
          error={dni.length !== 0 ? false : true }
          required
          variant="outlined"
          label="DNI"
          value={dni}
          onChange={(e) => setDni(e.target.value.replace(/[^0-9]/g, ''))}
          style={{ padding:8, width: '30%' }}
        />

</div>
        
    </Box> */}
   
    
    {/* <Box
      component="form"
      sx={{
        width:'90%'
        ,
        '& .MuiTextField-root': { padding:8, width: '33.33%' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          disabled={visible}
          error={codigoArea.length !== 0 ? false : true }
          required
          variant="outlined"
          label="Codigo de área"
          value={codigoArea}
          type="text"
          onChange={(e) =>  setCodigoArea(e.target.value.replace(/[^0-9]/g, ''))}
        />
        <TextField
          disabled={visible}
          error={telefono.length !== 0 ? false : true }
          required
          variant="outlined"
          label="Telefono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value.replace(/[^0-9]/g, ''))}
        />
        <TextField
          disabled={visible}
          error={codigoPostal.length !== 0 ? false : true }
          required
          variant="outlined"
          label="Código Postal"
          value={codigoPostal}
          onChange={(e) => setCodigoPostal(e.target.value.replace(/[^0-9]/g, ''))}
        />

</div>
        
    </Box> */}
      {/* <Box
      component="form"
      sx={{
        width:'90%'
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          disabled={visible}
          error={calle.length !== 0 ? false : true }
          required
          variant="outlined"
          label="Calle"
          value={calle}
          onChange={(e) => setCalle(e.target.value)}
          style={{ padding:8, width: '70%' }}
        />
        <TextField
          disabled={visible}
          error={nroCalle.length !== 0 ? false : true }
          required
          variant="outlined"
          label="Número"
          value={nroCalle}
          onChange={(e) => setNroCalle(e.target.value.replace(/[^0-9]/g, ''))}
          style={{ padding:8, width: '30%' }}
        />

</div>
        
    </Box> */}
      
    {/* { verificarCampos() && <Typography color="error" style={{margin:5, paddingBottom:20}}>Completa los campos para generar el QR o pagar via web</Typography> }  */}
       
      
        {/*  visible ? */}
         
         {/* <Box sx={{display:'flex', flexDirection:'row'}}>
         <Button className={classes.button} disabled={verificarCampos()} onClick={() => window.open(url)} >
         <img src={mp} height="40" style={{marginRight:10}} alt="EntrenaHabitos"/>
         Pagar en MercadoPago.com
         </Button>
         
         <Button className={classes.buttonCancelar} onClick={()=> cancelarPago()}>
            Cancelar
          </Button>
          </Box> */}
         {/* <Box sx={{display:'flex', height:'auto', justifyContent:'center', alignItems:'center'}}>
           <Box sx={{margin:10, display:'flex', justifyContent:'center'}} >{loadingQr ? <CircularProgress/> : <img src={qr} width="250" height="250" alt="Entrena Habitos" />}
           </Box></Box> */}
     
     
      {/* <Button className={classes.button} disabled={verificarCampos()} onClick={()=> generarLinks()} > 
      <img src={mp} height="40" style={{marginRight:10}} alt="EntrenaHabitos"/>
      {loading ? 'Generando Link...' : 'Generar Pago'}
      </Button> */}
      
    
    </Box>
      
    </Box> 
      <Footer />
      </Box>
      :
      <Typography>Loading...</Typography>
      }
  </>;
};

export default CompraPlan;
