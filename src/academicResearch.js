import React, { useState } from 'react';
import Box from '@mui/material/Box';
import calander from './pictures/calander.jpg';
import sd from './pictures/sd.jpg';

function Research() {
  return (
    <div >
         <Box
      sx = {{
        display: 'flex',
    flexDirection: 'column',
    width: '60vw',           // 100% of viewport width
    height: '65vh',  
    gap: '4%',
    marginLeft: '20%'
      }}
     >

            <Box
                sx = {{
                    flex: '1',
                boxShadow: '10px 10px 10px black',
                    backgroundColor: '#486b7a',
                    borderRadius: '8px',
                    display: 'flex'
                }}>
                    <img src={calander} alt="calander Research" style={{ maxWidth: '30%', height: 'auto', margin: '2%' }} />
                   <Box>
                    <p  style={{fontSize: 'large', fontFamily: 'Playfair Display', textShadow: '0px 2px 5px black' }}> 
                   <b> Utilizing Calendars to Reduce Student Stress</b>​ </p>
                   <p style={{ fontSize: 'meduim',  fontFamily: 'Playfair Display', textShadow: '0px 2px 5px black' }}>
                   Research project centered on the premise that first-year students face challenges in managing college-level 
                   coursework, highlighting the potential benefits of implementing effective organizational tools</p>

                   </Box>
                </Box>
                <Box
                sx = {{
                    flex: '1',
                boxShadow: '10px 10px 10px black',
                    backgroundColor: '#486b7a',
                    borderRadius: '8px',
                    display: 'flex'
                }}>
                    <img src={sd} 
                    alt="sd Research" 
                    style={{ maxWidth: '30%', height: 'auto', margin: '2%' }}
                    />
                    <Box >
                    <p style={{ fontSize: 'large',  fontFamily: 'Playfair Display', textShadow: '0px 2px 5px black' }}>
                         <b>Bridging the Social Distance​ </b></p>

                    <p style={{ fontSize: 'meduim',  fontFamily: 'Playfair Display', textShadow: '0px 2px 5px black' }}>
                    Research centered on addressing the challenges faced by students in fostering social connections,
                     stemming from the reduced social connectivity resulting from the COVID-19 pandemic</p>


                     </Box>
                </Box>


     </Box>
    
    </div>
  );
}

export default Research;
