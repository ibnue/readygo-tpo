import React from 'react';
import styled from "styled-components";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SettingGender from "./components/SettingGender";
import SettingStyle from "./components/SettingStyle";
import SettingTime from "./components/SettingTime";
import SettingLocation from "./components/SettingLocation";
import Congratulation from "./components/Congratulation";



const GlobalStyle = styled.div`
  margin: 0;
  padding: 0;
`;


function App() {
  return (
      <GlobalStyle>
          <Router>
            <Routes>
                <Route path='/setting_gender' element={ <SettingGender/> } />
                <Route path='/setting_style' element={ <SettingStyle />} />
                <Route path='/setting_time' element={ <SettingTime />}/>
                <Route path='/setting_location' element={<SettingLocation />}/>
                <Route path='/setting_done' element={<Congratulation />} />
            </Routes>
          </Router>
      </GlobalStyle>
  );
}

export default App;
