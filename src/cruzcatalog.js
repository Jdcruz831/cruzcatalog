import React, { useState } from 'react';
import Box from '@mui/material/Box'; 
import "./project.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import thispic from './pictures/this.png';

function CruzCatalog() {
  const [showButtons, setShowButtons] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setShowButtons(!showButtons);
    setIsOpen(!isOpen);
  };

  return (
   <Box>


    <h1 class = "projectT"> CruzCatalog </h1>

    
    <p style={{fontSize: 'meduim',  fontFamily: 'Playfair Display', textShadow: '0px 2px 5px black', color: 'white' }}> 
    This website is a React MUI (Material-UI) project, hosted on GitHub Pages. Developed using Visual Studio Code, alongside
     my portfolio of projects, its primary objective is to serve as a platform for presenting my work and aiding in my professional journey.
    </p>

    <img src={thispic} alt="project pic" style={{ height: '25vh' }}/>


          <Box
          sx = {{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <GitHubIcon/><p class = "social"> <a class="custom-link" href="https://github.com/Jdcruz831">  GitHub: Jdcruz831  </a></p>
         
          </Box>
          <Box
          sx = {{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
           
        </Box>
        

   </Box>
    
  );
}

export default CruzCatalog;
