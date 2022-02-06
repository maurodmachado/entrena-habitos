import { Box, Divider, makeStyles, Typography } from '@material-ui/core';
import React from 'react';


const useStyles = makeStyles(theme => ({
  objetivosContainer:{
    backgroundColor:'var(--primary-color)',
    display:'flex', 
    bgcolor:'var(--primary-color)', 
    alignItems:'center', 
    [theme.breakpoints.up('sm')]: {
      fontSize: 15,
    },
    [theme.breakpoints.up('md')]: {
    },
    [theme.breakpoints.up('lg')]: {
    },
    [theme.breakpoints.up('xl')]: {
    },
  },
  text:{
    fontSize:27,
    fontWeight:'bold',
    [theme.breakpoints.up('sm')]: {
      fontSize: 30,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 40,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 50,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 60,
    },
  },
  box1:{
    display:'flex', 
    width:'100%',
    flexDirection:'column',
    alignItems:'center',
    backgroundColor:'white',
    paddingBottom: 20,
    [theme.breakpoints.up('sm')]: {
      fontSize: 20,
      flexDirection:'column',
    },
    [theme.breakpoints.up('md')]: {
      flexDirection:'row',
    },
    [theme.breakpoints.up('lg')]: {
      flexDirection:'row',
    },
    [theme.breakpoints.up('xl')]: {
      flexDirection:'row',
    },
  },
  box2:{
    width:'100%',
    textAlign:'center',
    padding:20,
    alignItems:'center',
    backgroundColor:'white',
    paddingBottom: 20,
    [theme.breakpoints.up('sm')]: {
      fontSize: 15,
    },
    [theme.breakpoints.up('md')]: {
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight:200,
      paddingLeft:200
    },
    [theme.breakpoints.up('xl')]: {
      paddingRight:200,
      paddingLeft:200
    },
  }
}));

const Objetivos = () => {
  const classes = useStyles();
  return (
  <Box className={classes.objetivosContainer}>
  <Box className={classes.box2}>
    <Typography className={classes.text}>
    Actitud + Esfuerzo + Perseverancia
    </Typography>
    
    <Box className={classes.box1}>
      
    <img src="https://nutricioncestaro.com/images/Foto%20chaqueta.png" width={250} style={{padding:20}} alt="EntrenaHabitos"/>
    <Box sx={{padding:20, fontSize:18}}>
      Los tres componentes necesarios para lograr los objetivos tanto físicos como mentales. Se necesita trabajar mucho en la voluntad de la persona, generar ganas,
       entusiasmo para realizar la actividad física. No existe empezar y dejar. No arrancas el lunes. Es una decisión que debes tomar ya y empezar tu cambio.
       Podemos ayudarte para que te sientas acompañado, viendo la evolución en tu cuerpo y mente, generar pequeñas metas cada vez mas desafiantes, hasta conseguir el objetivo del plan.
       Una vez realizado esto podrás hacer un seguimiento en la web de tu evolución. Tambien podes acceder a la Planilla de Evolución.
    </Box>
<Divider/>
</Box>
    
</Box>
  </Box>
  )
};

export default Objetivos;
