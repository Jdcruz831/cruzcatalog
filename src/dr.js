import React, { useState } from 'react';
import Box from '@mui/material/Box'; 
import "./project.css";
import projectGif from './pictures/projectGIF.gif';
import LinkIcon from '@mui/icons-material/Link';
import GitHubIcon from '@mui/icons-material/GitHub';



function Dr() {
  const [showButtons, setShowButtons] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setShowButtons(!showButtons);
    setIsOpen(!isOpen);
  };

  return (
   <Box>


    <h1 class = "projectT"> Pharmaceutical-Web-App-Project</h1>

    
    <p style={{fontSize: 'meduim',  fontFamily: 'Playfair Display', textShadow: '0px 2px 5px black', color: 'white' }}> 
    A React and Vendia project for a medical website (as part of the CSC 131 course at Sacramento State University). 
    It has multiple interfaces that allow for diffrent orginzations to have diffrent logins, using things such as Vendia
     hooks and acl inputs to limit which organization can edit/ see certian data.
    </p>

    <img src={projectGif} alt="project gif" style={{ height: '25vh' }}/>


          <Box
          sx = {{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <GitHubIcon/><p class = "social"> <a class="custom-link" href="https://github.com/Jdcruz831">  GitHub: Jdcruz831  || </a></p>
          <LinkIcon/>
           <p class = "social"> <a class="custom-link" href="https://gleaming-kleicha-f0118d.netlify.app/"> 
           Deployed Link</a></p>
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

export default Dr;
