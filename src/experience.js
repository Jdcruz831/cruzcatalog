import React, { useState } from 'react';
import './experience.css';
import { TabContext, TabPanel } from '@mui/lab';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabList from '@mui/lab/TabList';
import hImage from './pictures/hp.jpg';

function Experience() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
     <center>
      <TabContext value = {value}>
      <Box
      sx= {{
        boxShadow: '10px 10px 10px black',
        backgroundColor: '#486b7a',
        width: '50%',
        height: '72%',
        borderRadius: '8px',
        marginTop: '1%',
        marginRight: '2%',
        position: 'fixed',
      }}
      >
        <h1 className='tittle'>Professional Experience</h1>
        <TabList 
         onChange={handleChange}
         textColor="#cfb686"
        sx ={{
          ".Mui-selected": {
            color: `#cfb686`,
            }
        }}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#cfb686"
            
          }
        }}
         variant="fullWidth"
         orientation="vertical"
         aria-label="lab API tabs example"
         
         >
          <Tab
          sx = {{
            color: 'white',
           textShadow: '0px 2px 5px black'
           }}
          label = " Instructor and Supervisor for College level Supplementary Math Course"
          value = "1">
            
            </Tab>
            <h4>  Aug 2021 - Active | Sacramento CA </h4>

            <Tab
            sx = {{
              color: 'white',
             textShadow: '0px 2px 5px black'
             }}
            label = "Personal Assistant to Google Associate in legal (Privacy and Trademark)"
            value = "2">
            </Tab>
            <h4>  June 2022 - March 2023 | San Francisco CA  </h4>

            <Tab
            sx = {{
              color: 'white',
             textShadow: '0px 2px 5px black'
             }}
            label = "I.T. Assistant at Good Shepherd Preschool"
            value = "3">
            </Tab>
            <h4>   Summer 2022 | Salinas CA </h4>
           
           <Tab 
           sx = {{
            color: 'white',
           textShadow: '0px 2px 5px black'
           }}
          label = "Lifeguard/ Swim Instructor for Salinas YMCA"
          value = "4">
           </Tab>
            
            <h4>   July 2018- July 2019  |  Salinas CA </h4>
              </TabList>
              </Box>

              
              <div>
                <Box 
                sx= {{
                  boxShadow: '10px 10px 10px black',
                  backgroundColor: '#486b7a',
                  width: '45%',
                  height: '32%',
                  borderRadius: '8px',
                  marginTop: '1%',
                  right: '2%',
                  position: 'fixed',
      }}>
              <TabPanel value = "1">
                  
                    <b> S.I. and Supervisor for Math Course</b><br/><br/>
                    <p className='job'>- Tutored students in various subjects, including Computer Science and Math.<br/><br/>
                    - Assisted in the planning and execution of PAL program events.</p>

              </TabPanel>

              <TabPanel value = "2">
              
              <b>Personal Assistant</b><br/><br/>
              <p className='job'> - Coordinated meetings and events with internal and external stakeholders.<br/><br/>
                   - Managed confidential information and maintained communication between team members.</p>

              </TabPanel>

              <TabPanel value = "3">
              
              <b>IT Assistant</b><br/><br/>
              <p className='job'> - Assisted with hardware and software installation and maintenance.<br/><br/>
                    - Trained staff on basic troubleshooting and computer skills.</p>

              </TabPanel>

              <TabPanel value = "4">
              
              <b>Lifeguard</b><br/><br/>
                  <p className='job'>  - Instructed individuals and groups in swimming techniques and water safety. <br/><br/>
                    - Administered first aid and CPR when necessary.</p>

              </TabPanel>
              </Box>
              </div>

            </TabContext>
            <img class = "hp" src={hImage} alt="h Image" />
     </center>
    </div>
  );
}

export default Experience;
