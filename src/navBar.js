import React, { useState } from 'react';
import ContactMenu from './contactMenu.js';

import AppBar from '@mui/material/AppBar';
import './navBar.css';

function NavBar() {
  return (
    <div>
      
      <AppBar 
      
      position="absolute"
      width = "100%"
      sx={{
        height: '11%',
        display: 'flex',
      backgroundColor:'#124459' ,
     zIndex: 1,
      }}
      >
      
     
      <h2 className='navName'>Jacob Cruz</h2>
      
      <ContactMenu />
      </AppBar>
    </div>
  );
}

export default NavBar;
