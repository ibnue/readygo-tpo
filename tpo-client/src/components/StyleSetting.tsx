import React, {useState} from 'react'
import styled from "styled-components";
import {BsCheckCircleFill as Checkbox} from "react-icons/bs";


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
  gap: 236px;
  
  span{
    font-size: 12px;
  }
`;

const SelectStyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

`;

const StyleOptions = styled.div`
  margin: 10px;
  width: 335px;
  height: 48px;
  background-color: #F9F9F9;
  border-radius: 100px;
  
  
  .check-box{
    font-size: 10px;
    position: relative;
    top: 32%;
    left: 5%;
    color: #F9F9F9;
    border: 1px solid #A1A1A1;
    border-radius: 10px;
  }

  span{
    position: relative;
    top: 15px;
    left: 28px;
  }
`
const FooterWrap = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #3A3F45;
  border-radius: 100px;
  width: 80%;
  height: 52px;
  position: fixed;
  bottom: 40px;
  
  div{
    position: relative;
    font-size: 30px;
    color: white;
    top: 8px;
  }
`;


function StyleSetting() {
    const [option, setOption] = useState(['Casual','Street','Office','Romantic','Sexy/Glamorous','Unique','Unisex',])
    return(
        <div>
            <Header>
                <span>User Setting</span>
            </Header>
            <SettingTitle>
                <span>Gender</span>
                <span>1/4</span>
            </SettingTitle>
            <SelectStyledWrapper>
                    {option.map( (value,index) => {
                        return(
                            <StyleOptions>
                                <Checkbox className='check-box'/>
                                <span>{value}</span>
                            </StyleOptions>
                        )
                    })}
                <FooterWrap>
                    <div>Next</div>
                </FooterWrap>
            </SelectStyledWrapper>


        </div>
    )
}

export default StyleSetting;