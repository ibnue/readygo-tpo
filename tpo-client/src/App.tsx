import React, {useState} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SettingGender from "./components/SettingGender";
import SettingStyle from "./components/SettingStyle";
import SettingTime from "./components/SettingTime";
import SettingLocation from "./components/SettingLocation";
import Congratulation from "./components/Congratulation";
import MyPage from "./components/MyPage";

function App() {

  const [gender, setGender] = useState()
  const [myStyle , setMyStyle] = useState<string[]>([]);
  const [minVal, setMinVal] = useState<number>(0);
  const [maxVal, setMaxVal] = useState<number>(24);

  const selectGender = (props) => {
    setGender(props)
  }

  const selectStyle = (props) => {
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
          <Route path='/setting/gender' element={ <SettingGender gender={gender} selectGender={selectGender}/>}  />
          <Route path='/setting/style' element={ <SettingStyle myStyle={myStyle} selectStyle={selectStyle} />} />
          <Route path='/setting/time' element={ <SettingTime startTime={startTime} endTime={endTime} minVal={minVal} maxVal={maxVal} min={0} max={24}/>}/>
          <Route path='/setting/location' element={<SettingLocation sex={gender} myStyle={myStyle} minVal={minVal} maxVal={maxVal} />}/>
          <Route path='/setting/done' element={<Congratulation />} />
          <Route path='/mypage' element={<MyPage/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
