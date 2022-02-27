import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
  nosotrosContainer:{
    backgroundColor:'var(--primary-color-solid)',
    paddingRight:10,
    marginLeft:0,
    [theme.breakpoints.up('sm')]: {
      fontSize: 15,
      marginLeft:0,
    },
    [theme.breakpoints.up('md')]: {
      paddingRight:100,
      marginLeft:0,
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight:150,
      marginLeft:0,
    },
    [theme.breakpoints.up('xl')]: {
      paddingRight:200,
    },
  },
  nosotros: {
    paddingTop:40,
    padding:20,
    zIndex: 1,
    fontSize: 27,
    borderBottomRightRadius:100,
    backgroundColor:'white',
    width:'100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft:0,
    },
    [theme.breakpoints.up('md')]: {
      paddingRight:100,
      marginLeft:0,
    },
    [theme.breakpoints.up('lg')]: {
      paddingRight:150,
      marginLeft:0,
    },
    [theme.breakpoints.up('xl')]: {
      paddingRight:200,
      paddingLeft:200,
    },
  },
  linea: {
    background: '#0747a6', height:10, margin:20,
    width:'20%'
  },
  item: {
    width:30, 
    marginTop:15, 
    position:'absolute',
    marginLeft: 15,
    [theme.breakpoints.up('sm')]: {
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: 15,
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 15,
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft: 215,
    },
  },
  paragraph:{
    marginLeft:30,
    marginRight:10,
    fontSize: 18,
    fontFamily:'Montserrat',
    [theme.breakpoints.up('sm')]: {
      fontSize: 18,
      marginRight:20,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 20,
    },
    [theme.breakpoints.up('lg')]: {
      marginLeft:50,
      marginRight:50,
      fontSize: 22,
    },
    [theme.breakpoints.up('xl')]: {
      marginLeft:50,
      marginRight:50,
      fontSize: 23,
    },
  }
}));

const Nosotros = ({infoNosotros}) => {
  const classes = useStyles();
  return (
    <Box className={classes.nosotrosContainer}>
      <div className={classes.item}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 94 94" className="gradients">
        <path fill="#0A67F2" d="M.555 16.159h92.74v15.457H.555z"></path>
        <path fill="#175CA6" d="M.555.932h92.74v15.457H.555z"></path>
        <path fill="#0747A6" d="M.555 31.616h92.74v15.457H.555z"></path>
        <path fill="#074CB3" d="M.555 47.072h68.009v15.457H.555z"></path>
        <path fill="#063B8C" d="M.555 77.986h43.279v15.457H.555z"></path>
        <path fill="#042B66" d="M.555 62.529h68.009v15.457H.555z"></path>
        </svg>
        </div>
    <Box className={classes.nosotros} id="nosotros">
      <Typography className={classes.paragraph}>
{infoNosotros}
</Typography>
<Box className={classes.linea}>

</Box>
</Box>
</Box>
  )
};

export default Nosotros;
