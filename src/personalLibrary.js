import React from "react";
import "./theme.css";
import MenuButton from './menu.js';
import NavBar from './navBar.js';
import Library from "./library";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function PersonalLibrary() {
  return (
    <div className="App">
       <NavBar />
       <MenuButton />
     <center>
    
        <Library />
     </center>
    </div>
  );
}

export default PersonalLibrary;
