import React, {useRef, useState} from 'react'
import {useNavigate} from "react-router-dom";
import {Header,SettingTitle,SelectStyledWrapper,StyleOptions,FooterWrap} from "../styles/StylesSetStyle";
import backBtn from '../assets/icons/back-icon.png';
import checkCircle from '../assets/icons/circle-icon.png';
import emptyCircle from "../assets/icons/empty-circle.png";


function SettingStyle() {

    const navigate = useNavigate();
    const onClickHandler = () => {
        if(myStyle.length >= 1){
            navigate('/setting/time');
        } else {
            alert('하나 이상 선택해 주세요')
        }

    }

    const [myStyle , setMyStyle] = useState<string[]>([]);

    const styleList = [
        'Casual',
        'Street',
        'Office',
        'Romantic',
        'Sexy/Glamorous',
        'Unique',
        'Unisex'
    ];

    const makeMyStyleList = (item) => {
        if(!myStyle.includes(item)){
            setMyStyle( [...myStyle, item])
        } else {
            setMyStyle(myStyle.map( n => {return n}).filter( value => value !== item))
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
                {styleList.map((item,index) => {
                    return (
                        <StyleOptions onClick={ () => {
                            makeMyStyleList(item)
                        }} isChecked={myStyle.includes(item)}>
                            <img src={emptyCircle} alt='check-icon' className='empty-box'/>
                            <img src={checkCircle} alt='check-icon' className='check-box'/>
                            <span>{item}</span>
                        </StyleOptions>
                    )
                })}
                {

                }
                <FooterWrap onClick={onClickHandler} onActive={myStyle.length >= 1}>
                    <div>Next</div>
                </FooterWrap>
            </SelectStyledWrapper>
        </div>
    )
}

export default SettingStyle;
