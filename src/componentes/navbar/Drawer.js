import React, { useState } from "react";
import {
  Box,
    Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme)=>({
    link: {
    textDecoration: "none",
    cursor:'pointer',
    color: "black",
    fontSize: 25,
    textAlign:'center',
    fontFamily:'Poppins',
    fontWeight:'bold',
    display:'flex',
    letterSpacing: 1,
    [theme.breakpoints.up('sm')]: {
      fontSize:25,
    },
    [theme.breakpoints.up('md')]: {
      fontSize:25,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize:25,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize:25,
    },
  },
    icon:{
        color: "white",
        width: '100%'
    },
    iconContent:{
      display:'flex',
      position:'absolute',
      right:0
    },
}));

const DrawerComponent = () => {
    const classes = useStyles();
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List>
        <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link  className={classes.link}
        to="nosotros"
        activeClass="active"
        spy={true} 
        smooth={true}
        offset={-80}
        onClick={() => setOpenDrawer(false)}
    >
              <Typography className={classes.link} noWrap>Quienes Somos</Typography>
            </Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link className={classes.link}
        to="objetivos"
        activeClass="active"
        spy={true} 
        smooth={true}
        offset={-80}
        onClick={() => setOpenDrawer(false)}
        >
              <Typography className={classes.link} noWrap>
              Objetivos</Typography>
            </Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link   className={classes.link}
        to="planes"
        activeClass="active"
        spy={true} 
        smooth={true}
        offset={-80}
        onClick={() => setOpenDrawer(false)}
        >
              <Typography className={classes.link} noWrap>
              Planes</Typography>
            </Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <LinkRouter to="/planilla" className={classes.link}>
              <Typography className={classes.link} noWrap>
              Planilla evolución</Typography>
            </LinkRouter>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link   className={classes.link}
        to="contacto"
        activeClass="active"
        spy={true} 
        smooth={true}
        offset={-80}
        onClick={() => setOpenDrawer(false)}
        >
              <Typography className={classes.link} noWrap>
              Contacto</Typography>
            </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <Box className={classes.iconContent}>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.icon} >      
        <MenuIcon />
      </IconButton>
      </Box>
    </>
  );
}
export default DrawerComponent;