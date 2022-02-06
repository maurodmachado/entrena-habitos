import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';


const FooterExperience = () => {

  const [textValue, setTextValue] = useState("");
  const onTextChange = (e) => setTextValue(e.target.value);
  return (
    <div className='footer-row' style={{margin:50, textAlign:'center'}}>
      <h1 style={{margin:10}}>Contacto</h1>
      <Box
      component="form"
      sx={{ bgcolor:'white',
      display:'flex',
      flexDirection:'row',
      borderRadius:15,
      margin:20,
      boxShadow: '0px 0px 0px 3px var(--secondary-color)'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        onChange={onTextChange}
        value={textValue}
        sx={{bgcolor:'white', borderRadius:1, margin:2}}
        label={"Nombre"} //optional
      />
        
      <TextareaAutosize
  placeholder="Escribí tu mensaje"
  style={{ width: '90%', minHeight:100, margin:10 }}
/>
    </Box>
      <div className="footer-experience">
        <br/>
        <br/>
      </div>
    </div>
  );
};

export default FooterExperience;
