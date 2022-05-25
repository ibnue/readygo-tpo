import React from 'react'
import styled from "styled-components";

const Header = styled.header`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  height: 52px;
  span{
    position: relative;
    top: 13px;
  };
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

const SliderWrap = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 20px;
`;

const SliderBar = styled.div`
  display: flex;
  background-color: #C3C4C5;
  width: 225px;
  height: 6px;
  border-radius: 100px;
  
  .start-point{
    position: relative;
    width: 16px;
    height: 16px;
    bottom: 4px;
    background-color: #3A3F45;
    border-radius: 100px;
    cursor: pointer;
  }
  .end-point{
    position: relative;
    left: 100px;
    bottom: 4px;
    width: 16px;
    height: 16px;
    background-color: #3A3F45;
    border-radius: 100px;
    cursor: pointer;
  }
  
  .start-time{
    font-size: 11px;
    position: relative;
    right: 32px;
    bottom: 3px;
  }
  .end-time{
    font-size: 11px;
    position: relative;
    left: 164px;
    bottom: 3px;
  }
`;
const FooterWrap = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #3A3F45;
  border-radius: 100px;
  width: 80%;
  height: 52px;
  position: fixed;
  bottom: 40px;
  cursor: pointer;
  
  div{
    position: relative;
    font-size: 18px;
    color: white;
    top: 16px;
  }
`;
function SettingTime() {
    return(
        <div>
            <Header>
                <span>User Setting</span>
            </Header>
            <SettingTitle>
                <span>Time</span>
                <span>3/4</span>
            </SettingTitle>
            <SliderWrap>
                <SliderBar>
                    <div className='start-time'>09:00</div>
                    <div className='start-point'>a</div>
                    <div className='end-point'>b</div>
                    <div className='end-time'>18:00</div>
                </SliderBar>
                <FooterWrap>
                    <div>Next</div>
                </FooterWrap>
            </SliderWrap>
        </div>
    )
}

export default SettingTime;