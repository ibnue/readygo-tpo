import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import Home from '../src/components/Main/Home'
import SettingGender from "./components/SettingGender";
import SettingStyle from "./components/SettingStyle";
import SettingTime from "./components/SettingTime";
import SettingLocation from "./components/SettingLocation";
import Congratulation from "./components/Congratulation";
import MyPage from "./components/MyPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/setting/gender' element={ <SettingGender/> } />
          <Route path='/setting/style' element={ <SettingStyle />} />
          <Route path='/setting/time' element={ <SettingTime min={0} max={24} onChange={({min,max}: {min:number; max:number}) => {
            console.log(`min = ${min}, max = ${max}`)
          }}/>}/>
          <Route path='/setting/location' element={<SettingLocation />}/>
          <Route path='/setting/done' element={<Congratulation />} />
          <Route path='/mypage' element={<MyPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
