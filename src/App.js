

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AboutMe from "./aboutMe";
import Home from "./home";
import ProjectRepository from "./projectRepository";
import PersonalLibrary from "./personalLibrary";



function App() {

  return (

      <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/aboutMe" element = {<AboutMe />} />
            <Route path = "/projectRepository" element = {<ProjectRepository />} />
            <Route path = "/personalLibrary" element = {<PersonalLibrary />} />
            
          </Routes>
    </BrowserRouter>

  );
}

export default App;
