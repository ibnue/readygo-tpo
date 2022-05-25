import React from 'react'
import exp from "constants";
import styled from "styled-components";
import {BsCheckCircleFill as Checkbox} from 'react-icons/bs'


const Header = styled.header`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  height: 52px;
  span{
    position: relative;
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

const MaleWrap = styled.div`
  width: 160px;
  height: 40px;
  background-color: #F9F9F9;
  border-radius: 30px;
  cursor: pointer;
  
  .check-box{
    position: relative;
    right: 10px;
    top: 10px;
    color: black; // 클릭 이벤트 발생시 #F9F9F9 컬러에서 -> black 컬로 변경 
    border: 1px solid #A1A1A1;
    border-radius: 10px;
  }

  span{
    position: relative;
    top: 8px;
    right: 4px;
  }
`;

const FemaleWrap = styled.div`
  width: 160px;
  height: 40px;
  background-color: #F9F9F9;
  border-radius: 30px;
  cursor: pointer;
  
  .check-box{
    position: relative;
    right: 12px;
    top: 10px;
    color: #F9F9F9;
    border: 1px solid #A1A1A1;
    border-radius: 10px;
  } 
  
  span{
    position: relative;
    top: 8px;
    right: 4px;
  }
`;




function SettingGender() {
    return(
        <div>
            <Header>
                <span>User Setting</span>
            </Header>
            <SettingTitle>
                <span>Gender</span>
                <span>1/4</span>
            </SettingTitle>
            <InputContainer>
                <MaleWrap>
                    <Checkbox className='check-box'/>
                    <span>Male</span>
                </MaleWrap>
                <FemaleWrap>
                    <Checkbox className='check-box'/>
                    <span>Female</span>
                </FemaleWrap>
                <footer>
                    <span>Next</span>
                </footer>
            </InputContainer>
        </div>
    )
}

export default SettingGender;