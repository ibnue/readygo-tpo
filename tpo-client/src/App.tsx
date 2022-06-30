import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SettingGender from "./pages/SettingGender";
import SettingStyle from "./pages/SettingStyle";
import SettingTime from "./pages/SettingTime";
import SettingLocation from "./pages/SettingLocation";
import Congratulation from "./pages/Congratulation";
import UserSetting from "./pages/UserSetting";
import Setting from './pages/Setting';

function App() {

  const [gender, setGender] = useState()
  const [myStyle , setMyStyle] = useState<string[]>([]);
  const [minVal, setMinVal] = useState<number>(0);
  const [maxVal, setMaxVal] = useState<number>(24);

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


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/setting/gender' element={ <SettingGender gender={gender} changeGender={changeGender}/>}  />
          <Route path='/setting/style' element={ <SettingStyle myStyle={myStyle} changeStyle={changeStyle} />} />
          <Route path='/setting/time' element={ <SettingTime startTime={startTime} endTime={endTime} minVal={minVal} maxVal={maxVal} min={0} max={24}/>}/>
          <Route path='/setting/location' element={<SettingLocation
            sex={gender}
            myStyle={myStyle}
            minVal={minVal}
            maxVal={maxVal}
          />}/>
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
