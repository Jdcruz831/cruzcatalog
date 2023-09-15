
import "./theme.css";
import NavBar from './navBar.js';
import AppBar from '@mui/material/AppBar';
import React, { useState } from 'react';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import MenuButton from './menu.js';
import Box from '@mui/material/Box';
import Experience from "./experience";
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import Button from '@mui/material/Button';
import Education from "./Education";
import AboutMeMe from "./aboutMeMe";
import Contact from "./contact";



function AboutMe() {
  
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="App"
     >
      <MenuButton />
    

        <AppBar
        position="fixed"
        width = "100%"
        elevation={0}
        sx={{
          top: '11%',
          height: '7%',
          display: 'flex',
        backgroundColor: '#124459',
        zIndex:2,
        }}
        >
          
         
          <TabContext value={value}>
          <TabList 
         onChange={handleChange}
         textColor="#cfb686"
        sx ={{
          
          ".Mui-selected": {
            color: "#cfb686",
            }
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#cfb686",
            color:"#cfb686"
          }
        }}
         variant="fullWidth"
         
         aria-label="lab API tabs example"
         
         >
        <Tab sx= {{
          color: 'white',
         textShadow: '5px 5px 5px black',
        }} 
        label='About Me' 
        value="1"/>
        <hr></hr>
        <Tab sx= {{
          color: 'white',
          textShadow: '5px 5px 5px black',
        }} 
        label='Education & Training' 
        value="3"/>
        <hr></hr>
        <Tab sx= {{
          color: 'white',
          textShadow: '5px 5px 5px black',
        }} 
        label='Professional Experience' 
        value="2"/>
        <hr></hr>
        <Tab sx= {{
          color: 'white',
          textShadow: '5px 5px 5px black',
        }} 
        label='Volunteer Work' 
        value="4"/>
        <hr></hr>
        <Tab sx= {{
          color: 'white',
          textShadow: '5px 5px 5px black',
        }} 
        label='Contact Info' 
        value="5"/>




      </TabList>
      <TabPanel value="1">
      <AboutMeMe />
        
        </TabPanel>


      <TabPanel value="2">
      
      
         <Experience />
       

      </TabPanel>
      <TabPanel value="3" 
       >
        
        <Education />
        
         </TabPanel>
      <TabPanel value="4" >'Volunteer Work</TabPanel>
      <TabPanel value="5">
        
        <Contact />
        </TabPanel>
      </TabContext>
     
        </AppBar>
        <NavBar />

        <div>
          <Box
          sx = {{
            boxShadow: '10px 10px 10px black',
            backgroundColor: '#486b7a',
            
            borderRadius: '8px',
            bottom: '1%',
            right: '2%',
            position: 'fixed',
          }}>
          <a href={process.env.PUBLIC_URL + '/_Resume Jacob Cruz.pdf'} download="_Resume Jacob Cruz.pdf">
        <Button
        sx = {{
            color: `#cfb686`,
        }}> 
          Download Resume <FileDownloadIcon />
        </Button>
        </a>
        </Box>
        </div>
    </div>
  );
}

export default AboutMe;
