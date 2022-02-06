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
import { Link } from "react-router-dom";

import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles(()=>({
    link:{
        textDecoration:"none",
        color: "black",
        fontSize: "20px",
        textAlign:'center'
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
    drawerPaper:{
      width: '50%'
    }
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
            <Link to="/nosotros" className={classes.link}>
              <Typography className={classes.link} noWrap>Quienes Somos</Typography>
            </Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/objetivos" className={classes.link}>
              <Typography className={classes.link} noWrap>
              Objetivos</Typography>
            </Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="/planes" className={classes.link}>
              <Typography className={classes.link} noWrap>
              Planes</Typography>
            </Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="/planilla" className={classes.link}>
              <Typography className={classes.link} noWrap>
              Planilla evolución</Typography>
            </Link>
            </ListItemText>
          </ListItem>
          <Divider/>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
            <Link to="/contacto" className={classes.link}>
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