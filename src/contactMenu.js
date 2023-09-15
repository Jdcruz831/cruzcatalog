import React, { useState } from 'react';
import PersonIcon from '@mui/icons-material/Person';
import Fab from '@mui/material/Fab';


function ContactMenu() {
  return (
    <div>
      <Fab
  size="medium"
  color="primary"
  sx={{ 
    position: 'absolute',
    top: '.5rem',
    right: '.5rem',
    mt: 1,
    mr: 2,
    backgroundColor: '#486b7a',
    color: 'white',
    '&:hover': {
      backgroundColor: '#124459',
     
    }
  }}
>
   <PersonIcon />
      </Fab>
    </div>
  );
}

export default ContactMenu;
