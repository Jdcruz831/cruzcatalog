import React, { useState } from 'react';
import Box from '@mui/material/Box'; 
import "./project.css";
import GitHubIcon from '@mui/icons-material/GitHub';


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
 
          <Box
          sx = {{
            bottom: '1%'
          }}>
          <GitHubIcon/><p class = "social"> <a class="custom-link" href="https://github.com/Jdcruz831">  GitHub: Jdcruz831</a></p>
          </Box>
   </Box>
  );
}

export default Venture;
