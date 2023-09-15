import React, { useState } from 'react';
import Button from '@mui/material/Button';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Grow from '@mui/material/Grow';
import CloseIcon from '@mui/icons-material/Close';
import Stack from '@mui/material/Stack';



function MenuButton() {
  const [showButtons, setShowButtons] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    setShowButtons(!showButtons);
    setIsOpen(!isOpen);
  };

  return (
    /*
    fab is the menu button on oncick show other link buttons 
    menuIcon is turinary to show either menu or close button
    */
    <Box sx={{ position: 'absolute' }}>
       
      <Fab
       position="absolute"
        size="medium"
        color="primary"
        sx={{ mt: 2, ml: 3, mb: 2, 
        
          backgroundColor: '#486b7a',
          color: 'white',
          '&:hover': {
            backgroundColor: '#124459',
            
          }
        }}
        onClick={handleButtonClick}
        
      >
      
     {isOpen ? <CloseIcon/> :  <MenuOutlinedIcon />}
      </Fab>
      <Box
      width={'7%'}>
      <Stack 
       position="absolute"
      direction="column"
      justifyContent="flex-start"
      sx={{ ml: 2, 
       zIndex:3,
      }}
      spacing={2}
      color={'white'}
      
      >

      <Grow 
      in={showButtons}
      style={{ transformOrigin: '50px 0' }}
      timeout={isOpen? 300 : 900}
      >
        <Box
        alignItems="center"
        >
          <Button
            href="/"
            variant="contained"
            sx={{  
              backgroundColor: '#486b7a',
              color: 'white',
              
              
              '&:hover': {
                backgroundColor: '#124459',
                
              }
            }}
             >
            Home
          </Button>
        </Box>
      </Grow>

      <Grow 
      in={showButtons}
      style={{ transformOrigin: '50px 0' }} 
      timeout={isOpen? 300 : 600}
           >
        <Box>
          <Button
            href="/ProjectRepository"
            variant="contained"
            sx={{  
              backgroundColor: '#486b7a',
              color: 'white',
              '&:hover': {
                backgroundColor: '#124459',
              }
            }}
           
          >
            Projects 
          </Button>
        </Box>
      </Grow>

      <Grow 
      in={showButtons}
      style={{ transformOrigin: '50px 0' }}
      timeout={isOpen? 600 : 300}
            >
        <Box>
          <Button
            href="/PersonalLibrary"
            variant="contained"
            sx={{  
              backgroundColor: '#486b7a',
              color: 'white',
              '&:hover': {
                backgroundColor: '#124459',
              }
            }}
            
          >
            Library
          </Button>
        </Box>
      </Grow>

      <Grow 
      in={showButtons}
      style={{ transformOrigin: '50px 0' }}
      timeout={isOpen? 900 : 0}
       >
        <Box>
          <Button
            href="/AboutMe"
            variant="contained"
            sx={{  
              backgroundColor: '#486b7a',
              color: 'white',
              '&:hover': {
               backgroundColor: '#124459',
        }
            }}
            
          >
            About
          </Button>
        </Box>
      </Grow>
      </Stack>
      </Box>
      
     
    </Box>
    
  );
}

export default MenuButton;
