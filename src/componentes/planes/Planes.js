import {
  Box,
  Button,
  CircularProgress,
  Divider,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import clienteAxios from "../../config/axios";
import imgPlan1 from "../../media/imgPlan1.jpg";
// import planesEntrenamiento from './planes.json'

const useStyles = makeStyles((theme) => ({
  planes: {
    background: "white",
    display: "flex",
    width: "100%",
    flexDirection: "column",
  },
  planesbox2: {
    textAlign: "center",
    width: "auto",
    marginLeft: 25,
    alignSelf: "center",
    borderTopLeftRadius: 100,
    backgroundColor: "var(--primary-color-solid)",
    paddingRight: 10,
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {
      paddingRight: 100,
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: 150,
    },
    [theme.breakpoints.up("xl")]: {
      paddingRight: 200,
      marginLeft: 210,
    },
  },
  planesbox1: {
    background: "var(--primary-color-solid)",
    width: "auto",
    borderTopLeftRadius: 100,
    borderBottomLeftRadius: 100,
    alignSelf: "center",
    marginLeft: 10,
    paddingRight: 0,
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {
      paddingRight: 100,
    },
    [theme.breakpoints.up("lg")]: {
      paddingRight: 150,
      marginLeft: 210,
    },
    [theme.breakpoints.up("xl")]: {
      paddingRight: 200,
      marginLeft: 210,
    },
  },
  floatlabel: {
    display: "flex",
    position: "absolute",
    height: "90%",
    width: 90,
    zIndex: 10,
    right: 0,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    flexDirection: "column",
    color: "white",
    fontSize: 32,
    paddingTop:15,
    fontFamily: "Poppins",
    fontWeight: "bold",
    lineHeight: 1.2,
    display: "none",
    [theme.breakpoints.up("sm")]: {},
    [theme.breakpoints.up("md")]: {
      fontSize: 32,
      display: "flex",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 32,
      display: "flex",
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 48,
      display: "flex",
    },
  },
  title: {
    width: "90%",
    lineHeight: 1.5,
    fontSize: 23,
    padding: 20,
    fontWeight: "bold",
    fontFamily: "Montserrat",
    [theme.breakpoints.up("sm")]: {
      fontSize: 23,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 27,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 32,
    },
  },
  textBody: {
    width: "90%",
    lineHeight: 1.5,
    fontFamily: "Montserrat",
    fontSize: 17,
    [theme.breakpoints.up("sm")]: {
      fontSize: 17,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 23,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 26,
    },
  },
  text: {
    color: "white",
    margin: 50,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    lineHeight: 1.8,
    fontSize: 21,
    [theme.breakpoints.up("sm")]: {
      fontSize: 21,
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 27,
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: 30,
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: 32,
    },
  },
  titleWhite:{
    fontSize:27,
    fontWeight:'bold',
    color:'white',
    textAlign:'center',
    [theme.breakpoints.up('sm')]: {
      fontSize: 30,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: 40,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 45,
    },
    [theme.breakpoints.up('xl')]: {
      fontSize: 50,
    },
  },
  planesList: {
    backgroundColor: "var(--primary-color-solid)",
    display: "flex",
    flexDirection: "column",
    paddingRight: 0,
    padding: 20,
    height: "auto",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
      paddingRight: 0,
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      fontSize: 17,
      paddingRight: 100,
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      fontSize: 17,
      paddingRight: 100,
    },
    [theme.breakpoints.up("xl")]: {
      flexDirection: "row",
      fontSize: 25,
      paddingRight: 150,
    },
  },
  dificultadList: {
    backgroundColor: "var(--primary-color-solid)",
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    paddingLeft:50,
    paddingRight:50,
    [theme.breakpoints.up("sm")]: {
      flexDirection: "column",
      paddingLeft:50,
      paddingRight:50,
    },
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      fontSize: 17,
      paddingLeft:100,
      paddingRight:100,
    },
    [theme.breakpoints.up("lg")]: {
      flexDirection: "row",
      fontSize: 17,
      paddingLeft:100,
      paddingRight:100,
    },
    [theme.breakpoints.up("xl")]: {
      flexDirection: "row",
      fontSize: 25,
      paddingLeft:250,
      paddingRight:250,
    },
  },
  cardPlan: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
    height: 400,
    borderRadius: 100,
    boxShadow: 15,
    margin: 30,
    [theme.breakpoints.up("sm")]: {
      margin: 30,
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      margin: 30,
    },
    [theme.breakpoints.up("lg")]: {
      margin: 30,
    },
    [theme.breakpoints.up("xl")]: {
      margin: 40,
      width: "100%",
    },
  },
}));

const Planes = ({objetivosText1, objetivosText2, objetivosTitle1, objetivosTitle2}) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const [planes, setPlanes] = useState([]);

  const getPlanes = async () => {
    const response = await clienteAxios.get("/planes");
    setPlanes(response.data);
  }

  useEffect(() => {
    getPlanes();
  }, []);

  return (
    <>
      <Box className={classes.floatlabel}>
        <Typography className={classes.label}>
          <span>E</span>
          <span>N</span>
          <span>T</span>
          <span>R</span>
          <span>E</span>
          <span>N</span>
          <span>Á</span>
          <br/>
          <span>H</span>
          <span>Á</span>
          <span>B</span>
          <span>I</span>
          <span>T</span>
          <span>O</span>
          <span>S</span>
        </Typography>
      </Box>
      <Box>
        <Box className={classes.planes}>
          <Box className={classes.planesbox1} id="objetivos">
            <Box
              sx={{
                padding: 20,
                bgcolor: "var(--primary-color-solid)",
                borderRadius: 100,
              }}
            >
              <Typography className={classes.text}>
                {objetivosText1}
              </Typography>
            </Box>
          </Box>
          <Box className={classes.planesbox2}>
            <Box
              style={{ padding: 20 }}
              sx={{
                textAlign: "center",
                width: "100%",
                alignSelf: "center",
                borderTopRightRadius: 100,
                borderBottomRightRadius: 100,
                backgroundColor: "white",
              }}
            >
              <Typography className={classes.title}>
                {objetivosTitle1}
              </Typography>
              <Box>
                <Typography className={classes.textBody}>
                {objetivosText2}
                </Typography>
              </Box>
              <Typography className={classes.title}>
                {objetivosTitle2}
              </Typography>
            </Box>
          </Box>
          <Box id="planes" className={classes.planesList}>
            <Grid container spacing={isSmall ? 0 : 4} style={{justifyContent:'center'}}>
              {planes !== undefined ? planes.map((plan, index) => 
              
                <Grid item xs={12} md={6} lg={6} xl={3} key={index}>
                  {plan.status === 'ACTIVO' ?
                  <Box className={classes.cardPlan}>
                    <Box sx={{ padding: 15, textAlign: "center", height: 200 }}>
                      <Typography variant="h6" style={{ color: "black" }}>
                        {plan.nombre}
                      </Typography>
                      <Typography style={{ color: "black" }}>
                        {plan.descripcion_corta}
                      </Typography>
                      
                      <Typography style={{ color: "black", fontWeight:'bold' }}>
                        $ {plan.precio}
                      </Typography>
                      
                      <Typography style={{ color: "black", fontWeight:'bold' }}>
                        Nivel {plan.nivel}
                      </Typography>
                    </Box>
                    <Box>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Link to={{
                  pathname: "/comprar"}}
                state={{plan: plan}} >
                  <Button
                          variant="contained"
                          color="primary"
                          style={{ width: "90%", padding: 10, margin: 10 }}
                          onClick={()=>window.scrollTo({
                            top: 0,
                            behavior: 'smooth',
                          })}
                        >
                          Comprar
                        </Button></Link>
                      </div>
                      <img
                        width="100%"
                        height={240}
                        style={{
                          borderBottomRightRadius: 100,
                          borderBottomLeftRadius: 100,
                          objectFit: "cover",
                          display: "flex",
                        }}
                        src={imgPlan1}
                        alt="EntrenaHabitos"
                      />
                    </Box>
                  </Box>
                :
                <></>
                      }
                </Grid>
              
              )
              :
              <CircularProgress/>
            }
            </Grid>
          </Box>
          <Box sx={{bgcolor: "var(--primary-color-solid)"}} >
            
          <Typography className={classes.titleWhite}>Dificultades</Typography>
          <Box className={classes.dificultadList} >
           <Box style={{witdh:'100%',backgroundImage: 'linear-gradient(to bottom, rgba(160, 50, 122, 0.62) , rgba(15, 91, 102, 0.78)),url("https://e.rpp-noticias.io/normal/2018/02/21/390239_568432.jpg")',margin:20, padding:50, textAlign:'center', borderRadius:10}}>
              <Typography variant="h4" style={{marginBottom:20, color:'white'}}>Principiante</Typography>
              <Divider/>
              <Typography style={{marginTop:20, color:'white'}}>Es el nivel inicial, si hace tiempo no haces actividad física o es tu primera vez, este nivel es para vos.</Typography>
              <Typography style={{marginTop:20, color:'white'}}>Un nivel enfocado en preparar el cuerpo, fortalecer musculos y articulaciones.</Typography>
           </Box>
           <Box style={{backgroundImage: 'linear-gradient(to bottom, rgba(160, 50, 122, 0.70) , rgba(15, 85, 102, 0.78)),url("https://www.caracteristicas.co/wp-content/uploads/2017/03/entrenamiento-funcional-1-e1564502577821.jpg")' ,margin:20, padding:50, textAlign:'center', borderRadius:10}}>
              <Typography variant="h4" style={{marginBottom:20, color:'white'}}>Intermedio</Typography>
              <Divider/>
              <Typography style={{marginTop:20, color:'white'}}>Si ya tenes un ritmo de ejercicio físico y queres afrontar nuevos desafios, este nivel es el indicado.</Typography>
              <Typography style={{marginTop:20, color:'white'}}>Un nivel enfocado en .</Typography>
           </Box>
           <Box style={{backgroundImage: 'linear-gradient(to bottom, rgba(160, 50, 122, 0.70) , rgba(15, 85, 102, 0.78)),url("https://www.caracteristicas.co/wp-content/uploads/2017/03/entrenamiento-funcional-2-e1564502237762.jpg")',margin:20, padding:50,  textAlign:'center', borderRadius:10}}>
              <Typography variant="h4" style={{marginBottom:20, color:'white'}}>Avanzado</Typography>
              <Divider/>
              <Typography style={{marginTop:20, color:'white'}}>Es el nivel inicial, si hace tiempo no haces actividad física o es tu primera vez, este nivel es para vos.</Typography>
              <Typography style={{marginTop:20, color:'white'}}>Un nivel enfocado en preparar el cuerpo, fortalecer musculos y articulaciones.</Typography>
           </Box>
          </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Planes;
