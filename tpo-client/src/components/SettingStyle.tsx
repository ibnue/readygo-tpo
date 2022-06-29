import React, {useRef, useState} from 'react'
import {useNavigate} from "react-router-dom";
import {Header,SettingTitle,SelectStyledWrapper,StyleOptions,FooterWrap} from "../styles/StylesSetStyle";
import backBtn from '../assets/icons/back-icon.png';
import checkCircle from '../assets/icons/circle-icon.png';
import emptyCircle from "../assets/icons/empty-circle.png";
import SelectStyle from './SelectStyle';

interface UserStyles {
    myStyle: string[]
    selectStyle: (value:string[]) => void
}

function SettingStyle({myStyle, selectStyle}: UserStyles ) {

    const navigate = useNavigate();

    const onClickHandler = () => {
        if(myStyle.length >= 1){
            navigate('/setting/time');
        } else {
            alert('하나 이상 선택해 주세요')
        }

    }

    return (
        <div>
            <Header>
                <img src={backBtn} alt='backButton' onClick={() => {
                    navigate(-1);
                }} onKeyDown={onClickHandler}/>
                <span>User Setting</span>
            </Header>
            <SettingTitle>
                <span>Style</span>
                <span>2/4</span>
            </SettingTitle>
            <SelectStyledWrapper>
                <SelectStyle myStyle={myStyle} selectStyle={selectStyle}/>
                <FooterWrap onClick={onClickHandler} onActive={myStyle.length >= 1}>
                    <div>Next</div>
                </FooterWrap>
            </SelectStyledWrapper>
        </div>
    )
}

export default SettingStyle;
