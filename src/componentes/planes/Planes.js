import {
  Box,
  Button,
  Grid,
  makeStyles,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import imgPlan1 from "../../media/imgPlan1.jpg";
import planesEntrenamiento from './planes.json'

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
    display: "flex",
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

const Planes = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  const planes = planesEntrenamiento;
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
                BASTA DE EMPEZAR Y DEJAR. HAREMOS TODO LO POSIBLE PARA QUE ESTE
                INICIO SEA EL VERDADERO COMIENZO. EL FACTOR DE LA MOTIVACIÓN Y
                LA DISCIPLINA JUNTO CON LA ALIMENTACIÓN ES LO QUE MARCA LA
                DIFERENCIA A LA HORA DEL RESULTADO Y EL HABITO SOSTENIBLE EN EL
                TIEMPO. TODOS LOS PLANES SON A DISTANCIA, ESTANDO DISPONIBLES
                PARA TODOS LOS PAISES Y SIEMPRE SE COMIENZA POR EL PLAN INICIAL
                ORIENTADO A TU OBJETIVO.
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
                ¿Por qué quiero que inicies con nuestro plan? Y que te ofrece ¿?
              </Typography>
              <Box>
                <Typography className={classes.textBody}>
                  Quiero que inicies por que estoy dispuesto a hacerte mejorar
                  en muchos aspectos como : físico, anímico y mental por que se
                  que siguiendo este plan que elaboramos con nuestro equipo está
                  adaptado para que cualquier persona ya sea mateur , medio o
                  pro pueda tener una guía completa de los mejores ejercicios de
                  para qué sirven y cuales son los beneficios esto adecuado a
                  tus metas ya sea GANAR MASA MUSCULAR , Si llegaste a tu peso
                  ideal con o sin la ayuda nuestra PODER MANTENERLO Y
                  DISFRUTARLO o si queres perder grasa esos kilitos de más ,
                  esos rollitos que simplemente no te gusta verlos cuando te
                  miras al espejo Estás en EL LUGAR CORRECTO . Acá no hay
                  fórmulas mágicas si estás buscando eso soga buscando. Acá se
                  entrena , acá se crean hábitos y se forma Disciplina . VAS A
                  TENER CONTACTO DIRECTO con el Personal trainner encargado de
                  armar las rutinas etc para que puedas sacar todas tus dudas
                  tendrás tu planilla de seguimiento desde el inicio del plan
                  con un chequeo de avances etc cada 2 semanas te cuento un poco
                  más ¿? Nuestros planes constan en 3 niveles amateur , medio y
                  pro en los cuales desde donde comienzan deberán ir subiendo de
                  intensidad de mes en mes
                </Typography>
              </Box>
              <Typography className={classes.title}>
                ¿Cómo seria tu vida si lograrías mejorar en un 100% tu relación
                con la comida, logrando el objetivo que buscas y manteniendo
                esos resultados en el tiempo? Quiero enseñarte que la forma
                correcta de aportar nutrientes no solo te va a dar resultados,
                sino que también, vas a tener ENERGÍA.
              </Typography>
            </Box>
          </Box>
          <Box id="planes" className={classes.planesList}>
            <Grid container spacing={isSmall ? 0 : 4}>
              {planes.map((plan) => 
                <Grid item xs={12} md={6} lg={4} xl={3}>
                  <Box className={classes.cardPlan}>
                    <Box sx={{ padding: 20, textAlign: "center", height: 200 }}>
                      <Typography variant="h6" style={{ color: "black" }}>
                        {plan.title}
                      </Typography>
                      <Typography style={{ color: "black" }}>
                        {plan.descripcion}
                      </Typography>
                    </Box>
                    <Box>
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Link to={`/comprar/${plan.id}`}
                        ><Button
                          variant="contained"
                          color="primary"
                          style={{ width: "90%", padding: 10, margin: 10 }}
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
                      />
                    </Box>
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Planes;
