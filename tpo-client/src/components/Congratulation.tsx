import React from 'react';
import styled from "styled-components";
import Logo from '../assets/icons/logo.png';


function Congratulation() {
    return (
        <BackgroundWrap>
            <IconWrap>
                <img alt='logo' src={Logo}/>
                <div className='text-container'>
                    <p className='text'>Congratulation!</p>
                    <p className='second-text'>Find clothes <strong>suitable</strong> for the<br/>
                        temperature of your location <strong>Right Now!</strong></p>
                </div>
            </IconWrap>
            <FooterWrap>
                <div>Next</div>
            </FooterWrap>
        </BackgroundWrap>
    )
}

const BackgroundWrap = styled.div`
  * {
    margin: 0;
  }

  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #000000;
`;

const FooterWrap = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #FFFFFF;
  border-radius: 100px;
  width: 80%;
  height: 52px;
  position: fixed;
  bottom: 40px;
  cursor: pointer;

  div {
    position: relative;
    font-size: 18px;
    color: #000000;
    top: 16px;
  }
`;

const IconWrap = styled.div`
  background-color: black;

  img {
    position: relative;
    top: 100px;
    width: 20%;
    left: 40px;
  }

  .text-container {
    display: flex;
    flex-direction: column;
    position: relative;
    top: 120px;

  }

  .text {
    position: relative;
    left: 40px;
    font-size: 22px;
    color: #FFFFFF;
    font-weight: Bold;
  }

  .second-text {
    color: #FFFFFF;
    position: relative;
    top: 20px;
    left: 40px;
  }
`;

export default Congratulation;