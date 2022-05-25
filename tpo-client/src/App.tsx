import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SettingGender from "./components/SettingGender";
import SettingStyle from "./components/SettingStyle";
import SettingTime from "./components/SettingTime";
import SettingLocation from "./components/SettingLocation";


function App() {
  return (
      <div>
          <Router>
            <Routes>
                <Route path='/setting_gender' element={ <SettingGender/> } />
                <Route path='/setting_style' element={ <SettingStyle />} />
                <Route path='/setting_time' element={ <SettingTime />}/>
                <Route path='/setting_location' element={<SettingLocation />}/>
            </Routes>
          </Router>
      </div>
  );
}

export default App;
