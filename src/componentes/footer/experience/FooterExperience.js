import { Box, Button, Grid } from '@material-ui/core';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';


const FooterExperience = () => {

  const [textValue, setTextValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const onTextChange = (e) => setTextValue(e.target.value);
  const onTextAreaChange = (e) => setTextAreaValue(e.target.value);
  const enviarMensaje = () => {
    const msj = textAreaValue.replace(" ", "%20");
    window.open(`https://api.whatsapp.com/send/?phone=5493834545986&text=*Cliente:*%20${textValue}.%0A${msj}`)
  }
  return (
    <div className='footer-row' style={{margin:20, textAlign:'center'}}>
      <h1 style={{margin:10}}>¿Tenes alguna inquietud? Envianos un MD</h1>
      <Box
      component="form"
      sx={{ bgcolor:'white',
      display:'flex',
      flexDirection:'row',
      borderRadius:15,
      boxShadow: '0px 0px 0px 3px var(--secondary-color)'
      }}
      noValidate
      autoComplete="off"
    >
      <Grid container >
  <Grid item xs={7}>
  <TextField
        onChange={onTextChange}
        value={textValue}
        sx={{bgcolor:'white', borderRadius:1, margin:2}}
        label={"Nombre"} //optional
      />
  </Grid>
  <Grid item xs={5}>
  <Button
   style={{ marginTop:20,backgroundColor:'var(--primary-color-solid', fontFamily: "Montserrat", fontSize: 22,fontWeight:'bold',
   lineHeight: 1.5, borderRadius: '0.28em', color: '#fff', cursor: 'pointer', }}
      onClick={()=>enviarMensaje()}
      >Enviar</Button>
  </Grid>
  <Grid item xs={12}>
  <TextField
  placeholder="Escribi tu mensaje"
  value={textAreaValue}
  onChange={onTextAreaChange}
  multiline
  rows={3}
  sx={{width:'80%', marginBottom:2, }}
/>
  </Grid>
</Grid>
      
      
    </Box>
    
      <div className="footer-experience">
        <br/>
        <br/>
      </div>
    </div>
  );
};

export default FooterExperience;
