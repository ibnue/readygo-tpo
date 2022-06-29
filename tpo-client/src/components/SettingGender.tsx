import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {Header,SettingTitle,InputContainer,SelectorWrap} from "../styles/GenderStyle";
import backBtn from '../assets/icons/back-icon.png';
import checkCircle from '../assets/icons/circle-icon.png';
import emptyCircle from '../assets/icons/empty-circle.png';
import SelectGender from './SelectGender';

interface Gender {
    gender:string
    selectGender: (value:string) => void
}


function SettingGender({gender,selectGender}: Gender) {
    const navigate = useNavigate();

    const GENDER = {
        male: 'Male',
        female: 'Female',
    };

    const onClickHandler = () => {
        if (gender === GENDER.male || gender === GENDER.female) {
            navigate('/setting/style');
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
              <SelectGender gender={gender} selectGender={selectGender}/>
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

export default SettingGender;