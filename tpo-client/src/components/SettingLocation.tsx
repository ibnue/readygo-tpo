import React from 'react';
import styled from "styled-components";
import {FiSearch as SearchIcon} from 'react-icons/fi';
import { MdCancel as DeleteBtn} from 'react-icons/md';

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
  margin: 10px;
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 220px;
  
  span{
    font-size: 12px;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 16px;
  
  .search-bar{
    padding-left: 40px;
    border-radius: 100px;
    border: none;
    width: 300px;
    height: 40px;
    background-color: #F9F9F9;
    outline: none;
  }
  
  .search-icon{
    color: #656565;
    position: relative;
    left: 34px;
    top: 12.5px;
  }
  
  .delete-btn{
    color: #656565;
    position: relative;
    right: 30px;
    top: 12.5px;
    cursor: pointer;
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

function SettingLocation() {
    return(
        <div>
            <Header>
                <span>User Setting</span>
            </Header>
            <SettingTitle>
                <span>Location</span>
                <span>4/4</span>
            </SettingTitle>
            <SearchContainer>
                <SearchIcon className='search-icon' />
                <input className='search-bar' type ='text' placeholder='Search location'/>
                <DeleteBtn className='delete-btn'/>
                <FooterWrap>
                    <div>Done</div>
                </FooterWrap>
            </SearchContainer>

        </div>
    )
}


export default SettingLocation;