import { Box, Divider, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import img from '../../media/imgYo.png'


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

const Objetivos = ({sloganTitle, sloganText}) => {
  console.log(sloganTitle);
  const classes = useStyles();
  return (
  <Box className={classes.objetivosContainer}>
  <Box className={classes.box2}>
    <Typography className={classes.text}>
    {sloganTitle}
    </Typography>
    
    <Box className={classes.box1}>
      
    <img src={img} width={250} style={{padding:20}} alt="EntrenaHabitos"/>
    <Box sx={{padding:20, fontSize:18}}>
      {sloganText}
    </Box>
<Divider/>
</Box>
    
</Box>
  </Box>
  )
};

export default Objetivos;
