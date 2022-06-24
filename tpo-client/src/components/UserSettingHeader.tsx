import React from 'react';
import {Header} from "../styles/GenderStyle";
import backBtn from "../assets/icons/back-icon.png";


function UserSettingHeader() {
    return(
        <div>
            <Header>
                <img src={backBtn} alt='backButton'/>
                <span>User Setting</span>
            </Header>
        </div>
    )
}

export default UserSettingHeader;