import React from 'react';
import styled from 'styled-components';
import { FONT_STYLES } from '../styles/font-style';

export const HeaderWrap = styled.div`
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
    right: 150px;
    top: 13px;
    cursor: pointer;
  }
`;

export const SettingWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  
  
  ul {
    width: 400px;
    span{
      margin: 12px;
      font-weight: bold;
    }
  }
  
  li {
    margin: 12px;
    list-style: none;
    cursor: pointer;

    .setting-button{
      position: relative;
      left: 73.9%;//270px;
      top: 2px;
      width: 8px;
    }

    .location-button {
      position: relative;
      left: 80.5%;//295px;
      top: 2px;
      width: 8px;
    }
  }
`;

export const TextWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  
  ul{
    width: 400px;
    span{
      margin: 12px;
      font-weight: bold;
    }
  }
  
  li {
    margin: 12px;
    list-style: none;
    cursor: pointer;

    .terms-button{
      position: relative;
      left: 66%;//235px;
      top: 2px;
      width: 8px;
    }

    .policy-button {
      position: relative;
      left: 71.5%;//253px;
      top: 2px;
      width: 8px;
    }
    
    
    .attributions-button {
      position: relative;
      left: 51.5%;//170px;
      top: 2px;
      width: 8px;
    }
  }
`;