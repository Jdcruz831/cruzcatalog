import React, { useState } from 'react';
import { TabContext, TabPanel } from '@mui/lab';
import Box from '@mui/material/Box';
import momaImage from './pictures/moma.jpg';
import wineImage from './pictures/wine.jpg';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function AboutMeMe() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
    
    <center>
     
     <div className="imageList2">
        <ImageList variant="masonry" cols={3} gap={15} sx={{ alignItems: 'flex-start', overflowX: 'hidden', width: '100%', }}>
          <ImageListItem>
            <img src={wineImage} alt="First Image" />
          </ImageListItem>
          <ImageListItem>
          <Box
      sx= {{
        boxShadow: '10px 10px 10px black',
        backgroundColor: '#486b7a',
       
         borderRadius: '8px',
     
              
      }}
      >
        <p class = "aboutMe"> I'm Jacob Cruz, a dedicated full-time student currently pursuing
       a Bachelor's degree in Computer Science with a minor in Mathematics
        at California State University, Sacramento. My academic journey is 
        defined by a passion for problem-solving and intellectual growth,
         which has led me to also serve as a supplementary mathematics 
         instructor, helping my peers excel in their studies.
      <br></br><br></br>
      Originally from Salinas, California, I bring a diverse perspective 
      and a strong work ethic to my endeavors. In addition to my academic 
      pursuits, I'm an avid adventurer and an advocate for personal 
      development. Rock climbing provides the thrill of conquering 
      challenges and pushing boundaries, while swimming offers tranquility 
      and a connection to the water. Reading is a constant source of 
      inspiration, and I am an aspiring writer, particularly drawn to
       the world of fantasy.
      <br></br><br></br>
      Through my experiences and my dedication to continuous learning,
       I aim to bridge the gap between theory and practice, both in my 
       academic journey and my life's adventures.
       </p>
       </Box>
          </ImageListItem>
          <ImageListItem>
            <img src={momaImage} alt="Third Image" />
          </ImageListItem>
        </ImageList>
      </div>
     
        </center>
        
       
    </div>
  );
}

export default AboutMeMe;
