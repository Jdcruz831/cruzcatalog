import React, { useState } from 'react';
import Box from '@mui/material/Box'; 
import "./project.css";

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
   </Box>
    
  );
}

export default Venture;
