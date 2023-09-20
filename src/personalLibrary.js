import React from "react";
import "./theme.css";
import MenuButton from './menu.js';
import NavBar from './navBar.js';

function PersonalLibrary() {
  return (
    <div className="App">
       <NavBar />
       <MenuButton />
     <center>
        <h1>Personal Library</h1>
     </center>
    </div>
  );
}

export default PersonalLibrary;
