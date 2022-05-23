import React from 'react'
import exp from "constants";
import styled from "styled-components";


const Header = styled.header`
  text-align: center;
    font-size: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: row;
  padding: 13px 16px;
  gap: 8px;
  
`;

const MaleWrap = styled.div`
  width: 164px;
  height: 48px;
  background-color: #DFDFDF;
  border-radius: 30px;
`;
const FemaleWrap = styled.div`
  width: 164px;
  height: 48px;
  background-color: #DFDFDF;
  border-radius: 30px;
`;



function SettingGender() {
    return(
        <div>
            <Header>user setting</Header>
            <InputContainer>
                <MaleWrap>
                    <span>Male</span>
                    <input type='checkbox'/>
                </MaleWrap>
                <FemaleWrap>
                    <span>Female</span>
                    <input type='checkbox'/>
                </FemaleWrap>
            </InputContainer>
        </div>
    )
}

export default SettingGender;