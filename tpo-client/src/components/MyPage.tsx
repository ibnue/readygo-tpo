import React from 'react'
import SelectGender from "./SelectGender";
import SelectStyle from "./SelectStyle";
import {SetTime} from "./SetTime";
import {Container} from "../styles/MyPageStyle";
import UserSettingHeader from "./UserSettingHeader";

function MyPage() {
    return(
        <Container>
            <UserSettingHeader/>
            <div className='name-section'>
                <input type='text' placeholder='Name'/>
            </div>
            <div className='gender-section'>
                <SelectGender/>
            </div>
            <div className='style-section'>
                <SelectStyle/>
            </div>
            <div className='time-section'>
                <SetTime min={0} max={24} onChange={({min,max}: {min:number; max:number}) => {
                    console.log(`min = ${min}, max=${max}`)
                }} />
            </div>
            <div className='footer-button'>
                <footer>
                    <div>Done</div>
                </footer>
            </div>
        {/*   create footer button */}
        </Container>
    )
}

export default MyPage;