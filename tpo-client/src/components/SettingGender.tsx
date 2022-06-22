import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import backBtn from '../assets/icons/back-icon.png';
import checkCircle from '../assets/icons/circle-icon.png';
import emptyCircle from '../assets/icons/empty-circle.png';


interface SelectorWrapProp {
    isChecked: boolean;
}

function SettingGender() {
    const navigate = useNavigate();
    const [gender, setGender] = useState<string>();

    const GENDER = {
        male: 'Male',
        female: 'Female',
    };

    const onClickHandler = () => {
        if (gender === GENDER.male || gender === GENDER.female) {
            navigate('/setting_style');
        } else {
            alert('성별을 선택해 주세요')
        }
    };


    return (
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
                {['Male', 'Female'].map((obj) => {
                    return (
                        <SelectorWrap onClick={() => {
                            setGender(obj)
                        }} isChecked={gender === obj}>
                            <img src={emptyCircle} alt='check-icon' className='empty-circle'/>
                            <img src={checkCircle} alt='check-icon' className='check-box'/>
                            <span>{obj}</span>
                        </SelectorWrap>
                    );
                })
                }
                {
                    gender === GENDER.male || gender === GENDER.female ?
                        <footer onClick={onClickHandler} aria-hidden='true' style={{backgroundColor: '#3A3F45'}}>
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
    width: 8px;
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


const SelectorWrap = styled.div<SelectorWrapProp>`
  width: 164px;
  height: 40px;
  background-color: #F9F9F9;
  border-radius: 30px;
  cursor: pointer;

  .check-box {
    width: 16px;
    visibility: ${(props) => props.isChecked ? 'visible' : 'hidden'};
    position: relative;
    top: 30%;
    right: 30%;
  }

  .empty-circle {
    width: 16px;
    visibility: visible;
    position: relative;
    top: 30%;
    right: 20%;
  }

  span {
    color: ${props => props.isChecked ? '#000000' : '#9d9d9d'};
    position: relative;
    top: 9.5px;
    right: 32px;
  }
`;


export default SettingGender;