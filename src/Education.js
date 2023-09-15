import React, { useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import Box from '@mui/material/Box';
import sacState from './pictures/sacState.png';
import Button from '@mui/material/Button';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

function Education() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
    
      
      <Box
      sx= {{
        boxShadow: '10px 10px 10px black',
        backgroundColor: '#486b7a',
        width: '55%',
        height: '68%',
        borderRadius: '8px',
        marginTop: '1%',
        marginRight: '2%',
        position: 'fixed',
        right: '2%'
      }}
      > <center>
        <Box
            component="img"
            sx={{
                width: '8%',
                marginTop: '-1%',
                left: '46%',
                position: 'fixed'
            }}
            alt="sacState"
            src={sacState} 
            />
            <p class = "Education">- Bachelor's Degree in Computer Science (In Progress) </p>
            <p class = "hEducation">-Minor in Mathematics  (In Progress) </p>
            <p class = "lEducation"> 2020-2024 | Sacramento State | California State University Sacramento | GPA: 3.4</p>
             

              <Box
              sx = {{
                boxShadow: '0px 0px 10px black',
                backgroundColor: '#cfb686',
                borderRadius: '8px',
                marginTop: '3%',
                width: '50%'
              }}>
              <a href={process.env.PUBLIC_URL + '/SSR_TSRPT.pdf'} download="SSR_TSRPT.pdf">
        <Button
        sx = {{
            color: `#124459`,
        }}> 
          Download Unofficial Transcript <FileDownloadIcon />
        </Button>
        </a>
        </Box>

        <Box
              sx = {{
                boxShadow: '0px 0px 10px black',
                backgroundColor: '#cfb686',
                borderRadius: '8px',
                marginTop: '3%',
                width: '50%'
              }}>
        <a href={process.env.PUBLIC_URL + '/Strengthening the American Vote.pdf'} download="Strengthening the American Vote.pdf">
        <Button
        sx = {{
            color: `#124459`,
        }}> 
          Download Writing Sample <FileDownloadIcon />
        </Button>
        </a>
        </Box>
        </center>
        <Box
        sx = {{
            width: '50%'
          }}>
        <p class = "tEducation">Relevent Topics and Coursework: </p>
       
        <ul>
            <li>Web Development: HTML, CSS, React</li>
            <li>App Development: Java, CodeNameOne</li>
            <li>Data Structures: Hash Tables, Linked Lists, Binary Trees</li>
            <li>Basic Algorithms: Binary, Bubble & Merge search</li>
            <li>Additional: Assembly, JavaScript, Vendia, Git </li>
        </ul>
        </Box>

        <Box sx = {{
            width: '50%',
            float: 'right',
            marginTop: '-22%'
          }}>
        <p class = "tEducation">Additional Topics and Coursework: </p>
       
        <ul>
            <li>Honors Great Books I, II & III: Advanced reading and writing</li>
            <li>Philosophy: Intro and Buissness Ethics</li>
            <li>Natural Science (16 units): Seminar in Peer Learing</li>
            <li>Communicaation and Public Speaking</li>
            <li>Human Development </li>
        </ul>
        </Box>
        </Box>
    </div>
  );
}

export default Education;
