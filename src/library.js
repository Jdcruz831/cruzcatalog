import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Library() {
  return (
    <div >
         <Box sx = {{
            position: 'fixed',
            marginTop: '50vh',
            marginLeft: '40vw',
            boxShadow: '10px 10px 10px black',
                    backgroundColor: 'grey',
                    borderRadius: '8px',
                    zIndex: 9
                    }}>
                        Enter Password:
                        <br></br>
                        <TextField
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        
                    />
        </Box>
     <Box 
     sx = {{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.6)'
    }}
     >
        
        
        
    </Box>
    </div>
  );
}

export default Library;
