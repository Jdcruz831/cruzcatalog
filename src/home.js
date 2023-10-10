import React from 'react';
import MenuButton from './menu.js';
import ContactMenu from './contactMenu.js';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import firstImage from './pictures/climb.jpg';
import secondImage from './pictures/catalina.jpg';
import thirdImage from './pictures/chess.jpg';
import './home.css';
import './theme.css';

function Home() {
  return (
    <div className="App">
        
      <MenuButton />



     


     <center>
<div class="nine">
  <h1>Jacob Cruz<span>(831) 601-0323</span></h1>
</div>
     <p className='quote'>"Conversation enriches the understanding, but solitude is the school of genius" -Edward Gibbon</p>

     <div className="imageList">
        <ImageList variant="masonry" cols={3} gap={15} sx={{ overflowX: 'hidden', width: '100%', borderRadius: '8px' }}>
          <ImageListItem>
            <img src={firstImage} alt="First Image" />
          </ImageListItem>
          <ImageListItem>
            <img src={secondImage} alt="Second Image" />
          </ImageListItem>
          <ImageListItem>
            <img src={thirdImage} alt="Third Image" />
          </ImageListItem>
        </ImageList>
      </div>
      </center>

      <ContactMenu />
    </div>

  );
}

export default Home;
