import React from 'react';
import {useState} from "react";
import {SelectorWrap} from "../styles/GenderStyle";
import emptyCircle from "../assets/icons/empty-circle.png";
import checkCircle from "../assets/icons/circle-icon.png";

function SelectGender() {
    const [gender, setGender] = useState<string>();

    return (
        <>
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
        </>
    )
}

export default SelectGender;

