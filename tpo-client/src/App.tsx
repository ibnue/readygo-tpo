import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SettingGender from "./pages/SettingGender";
import SettingStyle from "./pages/SettingStyle";
import SettingTime from "./pages/SettingTime";
import SettingLocation from "./pages/SettingLocation";
import Congratulation from "./pages/Congratulation";
import UserSetting from "./pages/UserSetting";
import Setting from './pages/Setting';

import Home from '../src/components/Main/Home'
import Login from './pages/Appinit/Login';
import Location from './components/Main/Location';

function App() {

  const [gender, setGender] = useState()
  const [myStyle , setMyStyle] = useState<string[]>([]);
  const [minVal, setMinVal] = useState<number>(0);
  const [maxVal, setMaxVal] = useState<number>(24);
  const [userName, setUserName] = useState<string>();

  const changeGender = (props) => {
    setGender(props)
  }

  const changeStyle = (props) => {
    setMyStyle(props)
  }

  const startTime = (props) => {
    setMinVal(props)
  }

  const endTime = (props) => {
    setMaxVal(props)
  }

  const getUserName = (props) => {
    setUserName(props)
  }



  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/location' element={<Location />} />
          <Route path='/setting/gender' element={ <SettingGender gender={gender} changeGender={changeGender}/>}  />
          <Route path='/setting/style' element={ <SettingStyle myStyle={myStyle} changeStyle={changeStyle} />} />
          <Route path='/setting/time' element={ <SettingTime startTime={startTime} endTime={endTime} minVal={minVal} maxVal={maxVal} min={0} max={24}/>}/>
          <Route path='/setting/location' element={<SettingLocation />}/>
          <Route path='/setting/done' element={<Congratulation />} />
          <Route path='/setting/usersetting' element={<UserSetting
            gender={gender}
            changeGender={changeGender}
            myStyle={myStyle}
            changeStyle={changeStyle}
            startTime={startTime}
            endTime={endTime}
            minVal={minVal}
            maxVal={maxVal}
            userName={userName}
            getUserName={getUserName}
            min={0}
            max={24}
          />} />
          <Route path='setting' element={<Setting/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
