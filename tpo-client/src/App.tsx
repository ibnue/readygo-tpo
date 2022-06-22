import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SettingGender from "./components/SettingGender";
import SettingStyle from "./components/SettingStyle";
import SettingTime from "./components/SettingTime";
import SettingLocation from "./components/SettingLocation";
import Congratulation from "./components/Congratulation";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/setting_gender' element={ <SettingGender/> } />
          <Route path='/setting_style' element={ <SettingStyle />} />
          <Route path='/setting_time' element={ <SettingTime min={0} max={24} onChange={({min,max}: {min:number; max:number}) => {
            console.log(`min = ${min}, max = ${max}`)
          }}/>}/>
          <Route path='/setting_location' element={<SettingLocation />}/>
          <Route path='/setting_done' element={<Congratulation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
