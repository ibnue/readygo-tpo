import React from 'react'
import {useNavigate} from "react-router-dom";
import SelectGender from "./SelectGender";
import SelectStyle from "./SelectStyle";
import {SetTime} from "./SetTime";
import {Container, Header} from "../styles/MyPageStyle";
import backBtn from "../assets/icons/back-icon.png";

interface PropsData {
  gender: string
  selectGender: (value: string) => void
  myStyle: string[]
  selectStyle: (value: string[]) => void
  startTime: (value: number) => void
  endTime: (value: number) => void
  minVal: number,
  maxVal: number,
  min:number,
  max:number,
}

function MyPage({gender,selectGender,myStyle,selectStyle,startTime,endTime,minVal,maxVal,min,max} : PropsData) {

    const navigate = useNavigate()

    const goBackPage = () => {
        navigate(-1)
    }

    return(
        <Container>
            <Header>
                <img src={backBtn} alt='backButton' onClick={ () => {
                    goBackPage()
                }} onKeyDown={goBackPage}/>
                <span>User Setting</span>
            </Header>
            <div className='name-section'>
                <input type='text' placeholder='Name'/>
            </div>
            <div className='gender-section'>
                <SelectGender gender={gender} selectGender={selectGender}/>
            </div>
            <div className='style-section'>
                <SelectStyle myStyle={myStyle} selectStyle={selectStyle}/>
            </div>
            <div className='time-section'>
                <SetTime minVal={minVal} maxVal={maxVal} startTime={startTime} endTime={endTime} min={0} max={24}/>
            </div>
            <div className='footer-button'>
                <footer>
                    <div>Done</div>
                </footer>
            </div>
        </Container>
    )
}

export default MyPage;