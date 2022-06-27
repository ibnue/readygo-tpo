import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {Header,SettingTitle,SearchContainer,FooterWrap} from "../styles/LocationStyle";
import backBtn from '../assets/icons/back-icon.png';
import searchIcon from '../assets/icons/search-ic.png';
import deleteIcon from '../assets/icons/cancel-icon.png';

interface User {
    sex:string
    myStyle:string[]
    minVal:number
    maxVal:number
}

function SettingLocation({sex,myStyle,minVal,maxVal}:User) {

    const navigate = useNavigate()
    const onClickHandler = () => {
        axios({
            url:"/api/users",
            method:'post',
            data: {
                gender:sex,
                style:myStyle,
                start_hour:minVal,
                end_hour:maxVal
            },
            baseURL:'http://localhost:8080'
        })
        navigate('/setting/done')
    }
    return(
        <div>
            <Header>
                <img src={backBtn} alt='backButton' onClick={() => {
                    navigate(-1);
                }} onKeyDown={onClickHandler}/>
                <span>User Setting</span>
            </Header>
            <SettingTitle>
                <span>Location</span>
                <span>4/4</span>
            </SettingTitle>
            <SearchContainer>
                <img src={searchIcon} alt='search-icon' className='search-icon' />
                <input className='search-bar' type ='text' placeholder='Search location'/>
                <img src={deleteIcon} alt='delete-icon' className='delete-btn'/>
                <FooterWrap onClick={onClickHandler}>
                    <div>Done</div>
                </FooterWrap>
            </SearchContainer>

        </div>
    )
}
export default SettingLocation;