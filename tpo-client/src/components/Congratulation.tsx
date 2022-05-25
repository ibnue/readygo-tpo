import React from 'react';
import styled from "styled-components";

const BackgroundWrap = styled.div`
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
  
  div{
    position: relative;
    font-size: 18px;
    color: #000000;
    top: 16px;
  }
`;

function Congratulation() {
    return(
        <BackgroundWrap>
            <h1>Congratulation</h1>
            <FooterWrap>
                <div>Next</div>
            </FooterWrap>
        </BackgroundWrap>
    )
}

export default Congratulation;