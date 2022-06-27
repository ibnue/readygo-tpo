import React from 'react'
import {useNavigate} from "react-router-dom";
import SelectGender from "./SelectGender";
import SelectStyle from "./SelectStyle";
import {SetTime} from "./SetTime";
import {Container, Header} from "../styles/MyPageStyle";
import backBtn from "../assets/icons/back-icon.png";


function MyPage() {

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
                <SelectGender/>
            </div>
            <div className='style-section'>
                <SelectStyle/>
            </div>
            <div className='time-section'>
                <SetTime min={0} max={24} onChange={({min,max}: {min:number; max:number}) => {
                    console.log(`min = ${min}, max=${max}`)
                }} />
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