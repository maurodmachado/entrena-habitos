import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  makeStyles,
  useTheme,
  useMediaQuery,
  Box,
  Container
} from "@material-ui/core";
import DrawerComponent from "./Drawer";
import { Link } from 'react-scroll';
import {Link as LinkRouter} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  navbar: {
    background: 'var(--primary-color-solid)',
    display: 'flex',
    top:'0',
    position:'fixed',
    height:80,
    justifyContent:'center',
  },
  navlinks: {
    marginLeft: theme.spacing(2),
    display: "flex",
  },
  logo:{
    textDecoration:'none',
    color:'white',
    fontFamily:'Poppins',
    fontSize:33,
    letterSpacing: 1.2,    
    [theme.breakpoints.up('sm')]: {
      fontSize:35,
    },
    [theme.breakpoints.up('md')]: {
      fontSize:35,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:40,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize:40,
    },
  },
  link: {
    textDecoration: "none",
    cursor:'pointer',
    color: "white",
    fontSize: 22,
    fontFamily:'Poppins',
    fontWeight:'bold',
    letterSpacing: 1,
    margin: 13,
    "&:hover": {
      backgroundColor: 'var(--primary-color)'
    },
  },
}));

function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" className={classes.navbar}>
      <CssBaseline />
        <Container>
      <Toolbar>
        <Box sx={{display:'flex', flexDirection: 'row', justifyContent:'center'}}>
        <Link  className={classes.link}
        to="home"
        activeClass="active"
        spy={true} 
        smooth={true}
        offset={-80}
    ><LinkRouter to="/"><Typography className={classes.logo} noWrap>
          
          
         Entrená Hábitos
        </Typography>
         </LinkRouter>
        </Link>
        </Box>
        {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link  className={classes.link}
        to="nosotros"
        activeClass="active"
        spy={true} 
        smooth={true}
        offset={-80}
    >
    <Typography className={classes.link} noWrap>Nosotros</Typography>
    </Link>
            
    <Link  className={classes.link}
        to="objetivos"
        activeClass="active"
        spy={true} 
        smooth={true}
        offset={-80}
    >
              <Typography className={classes.link} noWrap>
              Objetivos</Typography>
            </Link>
            <Link  className={classes.link}
        to="planes"
        activeClass="active"
        spy={true} 
        smooth={true}
        offset={-80}
    >
              <Typography className={classes.link} noWrap>
              Planes</Typography>
            </Link>
            <Link  className={classes.link}
        to="planilla"
        activeClass="active"
        spy={true} 
        smooth={true}
        offset={-80}
    >
              <Typography className={classes.link} noWrap>
              Planilla evolución</Typography>
            </Link>
            <Link  className={classes.link}
        to="contacto"
        activeClass="active"
        spy={true} 
        smooth={true}
        offset={-80}
    >
              <Typography className={classes.link} noWrap>
              Contacto</Typography>
            </Link>
          </div>
        )}
      </Toolbar>
        </Container>
    </AppBar>
  );
}
export default Navbar;