import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import {BsCheckCircleFill as Checkbox} from 'react-icons/bs'
import backBtn from '../icons/icon-4.png'







function SettingGender() {
    const navigate = useNavigate();
    const [click, setClick] = useState(0);
    const [gender, setGender] = useState(['Male','Female']);
    const [color, setColor] = useState('#F9F9F9');
    const onClickHandler = () => {
        navigate('/setting_style');
    }
    const onClickChange = () => {
        color === '#F9F9F9' ? setColor('black') : setColor('#F9F9F9');
    }

    return(
        <div>
            <Header>
                <img src={backBtn} alt='backButton'/>
                <span>User Setting</span>
            </Header>
            <SettingTitle>
                <span>Gender</span>
                <span>1/4</span>
            </SettingTitle>
            <InputContainer>
                {gender.map( (value,index) => {
                    return(
                        <SelectorWrap onClick={onClickChange}>
                            <Checkbox className='check-box' color={color} />
                            <span>{value}</span>
                        </SelectorWrap>
                    )
                })}
                <footer onClick={onClickHandler} aria-hidden='true'>
                    <span>Next</span>
                </footer>
            </InputContainer>
        </div>
    )
}

const Header = styled.header`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  height: 52px;
  
  span{
    position: relative;
    top: 13px;
  }
  
  img{
    position: relative;
    right: 108px;
    top: 13px;
  }
`;

const SettingTitle = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 140px;
  
  span{
    font-size: 12px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: row;
  padding: 13px 16px;
  gap: 8px;
  
  footer{
    position: fixed;
    bottom: 40px;
    background-color: #3A3F45;
    color: white;
    border-radius: 30px;
    width: 80%;
    height: 60px;
    cursor: pointer;
    
    span{
      font-size: 18px;
      position: relative;
      top: 20px;
    }
  }
  
`;

const SelectorWrap = styled.div`
  width: 160px;
  height: 40px;
  background-color: #F9F9F9;
  border-radius: 30px;
  cursor: pointer;
  
  .check-box{
    position: relative;
    right: 40px;
    top: 11px;
    color: ${props => props.color};//#F9F9F9; // 클릭 이벤트 발생시 #F9F9F9 컬러에서 -> black 컬로 변경 
    border: 1px solid #A1A1A1; // 클릭 이벤트시 -> none 으로 변경
    border-radius: 10px;
  }

  span{
    position: relative;
    top: 8px;
    right: 24px;
  }
`;

export default SettingGender;