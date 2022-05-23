import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SettingGender from "./components/SettingGender";


function App() {
  return (
      <div>
          <Router>
            <Routes>
                <Route path='/setting' element={ <SettingGender/> } />
            </Routes>
          </Router>
      </div>
  );
}

export default App;
