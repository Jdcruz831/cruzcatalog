import React, { useState } from 'react';
import Box from '@mui/material/Box'; 
import "./project.css";
import GitHubIcon from '@mui/icons-material/GitHub';
import figma from './pictures/figma.png';
import venture from './pictures/venture.jpg';

function Venture() {
  const [showButtons, setShowButtons] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setShowButtons(!showButtons);
    setIsOpen(!isOpen);
  };

  return (
   <Box>


    <h1 class = "projectT"> Venture </h1>
 
    <p style={{fontSize: 'meduim',  fontFamily: 'Playfair Display', textShadow: '0px 2px 5px black', color: 'white' }}> 
    Venture is a social media app I have started creating. It is a location based social media that only allows
     users to post or see other users posts when they are within a small distance. This is an all google based project using flutter/Dart
     and using googles map api for the main homepage. I will eventully use googles app hosting servers as well as I continue.
    </p>

    <img src={venture} alt="venture Image" style={{ height: '35vh' }}/>


          <Box
          sx = {{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <GitHubIcon/><p class = "social"> <a class="custom-link" href="https://github.com/Jdcruz831">  GitHub: Jdcruz831  | |   </a></p>
          <img src={figma} alt="figma Image" style={{ width: '5%'}}/>
           <p class = "social"> <a class="custom-link" href="https://www.figma.com/file/GUSOVhIxLsLsfVFcqGLVJZ/Location-app?node-id=0%3A1&mode=dev"> 
           Figma Link</a></p>
          </Box>
          
        

   </Box>
  );
}

export default Venture;
