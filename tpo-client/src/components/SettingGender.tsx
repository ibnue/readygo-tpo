import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { BsCheckCircleFill as Checkbox } from 'react-icons/bs';
import backBtn from '../icons/icon-5.png';


function SettingGender() {
  const navigate = useNavigate();
  const [gender, setGender] = useState<string>();

  const GENDER = {
    man: 'male',
    woman: 'female',
  };

  const onClickHandler = () => {
    navigate('/setting_style');
  };
  return (
    <div>
      <Header>
        <img src={backBtn} alt='backButton' />
        <span>User Setting</span>
      </Header>
      <SettingTitle>
        <span>Gender</span>
        <span>1/4</span>
      </SettingTitle>
      <InputContainer>
        {['male', 'female'].map((obj) => {
          return (
            <SelectorWrap onClick={() => {
              setGender(obj);
            }} isChecked={gender === obj}>
              <Checkbox className='check-box' />
              <span>{obj}</span>
            </SelectorWrap>
          );
        })
        }
        {
          gender === GENDER.man || gender === GENDER.woman ? <footer onClick={onClickHandler} aria-hidden='true' style={{ backgroundColor: '#3A3F45' }}>
            <span>Next</span>
          </footer> : <footer onClick={onClickHandler} aria-hidden='true'>
            <span>Next</span>
          </footer>
        }


      </InputContainer>
    </div>
  );
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

  span {
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

  footer {
    position: fixed;
    bottom: 40px;
    background-color: #dfdfdf; // isChecked 가 true 일때 -> #3A3F45;
    color: white;
    border-radius: 30px;
    width: 80%;
    height: 60px;
    cursor: pointer;

    span {
      font-size: 18px;
      position: relative;
      top: 20px;
    }
  }

`;

interface SelectorWrapProp {
  isChecked: boolean;
}


const SelectorWrap = styled.div<SelectorWrapProp>`
  width: 164px;
  height: 40px;
  background-color: #F9F9F9;
  border-radius: 30px;
  cursor: pointer;

  .check-box {
    position: relative;
    top: 11px;
    right: 40px;
    color: ${(props) => props.isChecked ? '#000000' : '#f9f9f9'};
    border: 1px solid #A1A1A1;
    border-radius: 10px;
  }

  span {
    position: relative;
    top: 8px;
    right: 24px;
  }
`;


export default SettingGender;