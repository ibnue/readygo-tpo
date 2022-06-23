import React, {useRef, useState} from 'react'
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import backBtn from '../assets/icons/back-icon.png';
import checkCircle from '../assets/icons/circle-icon.png';
import emptyCircle from "../assets/icons/empty-circle.png";

interface SelectorWrapProp {
    isChecked:boolean
    onActive:string[]
}

function SettingStyle() {

    const navigate = useNavigate();
    const onClickHandler = () => {
        if(myStyle.length >= 1){
            navigate('/setting_time');
        } else {
            alert('하나 이상 선택해 주세요')
        }

    }

    const [myStyle , setMyStyle] = useState([]);

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

const Header = styled.header`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  height: 52px;

  span {
    position: relative;
    top: 13px;
  }

  img {
    width: 8px;
    cursor: pointer;
    position: relative;
    right: 108px;
    top: 13px;
  }
`;

const SettingTitle = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 236px;

  span {
    font-size: 12px;
  }
`;

const SelectStyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyleOptions = styled.div<SelectorWrapProp>`
  margin: 10px;
  width: 335px;
  height: 48px;
  background-color: #F9F9F9;
  border-radius: 100px;
  cursor: pointer;


  .check-box {
    width: 16px;
    position: relative;
    top: 32%;
    left: 0.5%;
    visibility: ${props => props.isChecked ? 'visible' : 'hidden'};
  }

  .empty-box {
    width: 16px;
    position: relative;
    top: 32%;
    left: 5%;
    visibility: visible;
  }


  span {
    color: ${props => props.isChecked ? '#000000' : '#9d9d9d'};
    position: relative;
    top: 13.7px;
    left: 16px;
  }
`
const FooterWrap = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${props => props.onActive ? '#3A3F45' : '#dfdfdf'};
  border-radius: 100px;
  width: 80%;
  height: 52px;
  position: fixed;
  bottom: 40px;
  cursor: pointer;

  div {
    position: relative;
    font-size: 18px;
    color: white;
    top: 16px;
  }
`;


export default SettingStyle;
