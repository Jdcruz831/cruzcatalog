import React from "react";

import MenuButton from './menu.js';
import NavBar from './navBar.js';
import Box from '@mui/material/Box'; 
import Venture from './Venture';
import { colors } from "@mui/material";
import "./theme.css";
import CruzCatalog from './cruzcatalog.js';
import Dr from './dr.js';

function ProjectRepository() {
  return (
    <div className="App">
       <NavBar />
       <MenuButton />
       <Box
        position="fixed"
        width = "100%"
        left={'-1px'}
        sx={{
        top: '11%',
        height: '7%',
        backgroundColor: '#124459',
        zIndex:2,
        
        }}
        >
          <center>
           <h1 style={{ color: 'white', fontFamily: 'Raleway', textShadow: '4px 2px 2px #222' }}>Project Repository</h1>
           </center>
          </Box>
          <center>
     <Box
     sx = {{
      display: 'flex',
      gap: '4%',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center',
      width: '95vw',           // 100% of viewport width
      height: '100vh', 
      
      
     }}>
      <Box
      sx = {{
        flex: '1',
        backgroundColor: '#486b7a',
        borderRadius: '8px',
        height: '520px',
        marginTop: '9%'
      }}>
      <Venture />
      </Box>

     
     <Box
     sx = {{
      flex: '1',
      backgroundColor: '#486b7a',
      borderRadius: '8px',
      height: '520px',
      marginTop: '9%'
    }}>
  <Dr />
     </Box>
     <Box
     sx = {{
      flex: '1',
      backgroundColor: '#486b7a',
      borderRadius: '8px',
      marginTop: '9%',
      height: '520px'
    }}>

<CruzCatalog />
     </Box>
     
     </Box>
     </center>
    </div>
  );
}

export default ProjectRepository;
