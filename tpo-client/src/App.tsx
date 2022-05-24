import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SettingGender from "./components/SettingGender";
import StyleSetting from "./components/StyleSetting";


function App() {
  return (
      <div>
          <Router>
            <Routes>
                <Route path='/setting' element={ <SettingGender/> } />
                <Route path='/style' element={ <StyleSetting />} />
            </Routes>
          </Router>
      </div>
  );
}

export default App;
