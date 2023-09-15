import React, { useState } from 'react';
import Box from '@mui/material/Box';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import portoImage from './pictures/porto.jpg';


function Contact() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
        <img src={portoImage} alt="porto" class="porto" />
      
      <Box
      sx= {{
        boxShadow: '10px 10px 10px black',
        backgroundColor: '#486b7a',
        width: '40%',
        height: '20%',
        borderRadius: '8px',
        marginTop: '5%',
        marginRight: '10%',
        position: 'fixed',
        right: '2%'
      }}
      > 
        <center>
      
      <div class="icon-and-text">
       <EmailIcon/>
       <p class="social">Email: jacob.cruz.9353@gmail.com</p>
       </div>

       <div class="icon-and-text">
       <LocalPhoneIcon/><p class="social">Cell Phone: (831)601-0323</p>
       </div>
         
      </center>
        </Box>

        <Box
      sx= {{
        boxShadow: '10px 10px 10px black',
        backgroundColor: '#486b7a',
        width: '30%',
        height: '20%',
        borderRadius: '8px',
        bottom: '10%',
        marginRight: '15%',
        position: 'fixed',
        right: '2%'
      }}
      > 
       <center>
      
       <div class="icon-and-text">
        <InstagramIcon></InstagramIcon>
        <p class="social">Instagram: Jacobcruz_02</p>
        </div>

        <div class="icon-and-text">
        <LinkedInIcon/> <p class = "social"> LinkedIn: <a class="custom-link" href="https://www.linkedin.com/in/jacob-cruz-3019a4227"> Jacob Cruz</a></p>
        </div>
          
       </center>
        </Box>
    </div>
  );
}

export default Contact;
