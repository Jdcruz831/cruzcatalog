import React, { useState } from 'react';
import Box from '@mui/material/Box'; 
import "./project.css";

function Dr() {
  const [showButtons, setShowButtons] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setShowButtons(!showButtons);
    setIsOpen(!isOpen);
  };

  return (
   <Box>


    <h1 class = "projectT"> Pharmaceutical-Study-Web-App-Project</h1>
   </Box>
    
  );
}

export default Dr;
