import React from 'react'
import styled from 'styled-components'

import HeaderOption from './HeaderOption'

import HomeRoundedIcon from '@material-ui/icons/HomeRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded'
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded'


function Header() {
    return (
        <HeaderContainer>
            <HeaderLeft>
                <img src="./logo.png" alt="" />
            </HeaderLeft>
            <HeaderMiddle>
                <SearchRoundedIcon />
                <input type="text" placeholder="Search" />
            </HeaderMiddle>
            <HeaderRight>
                <HeaderOption Icon={HomeRoundedIcon} />
                <HeaderOption Icon={ChatBubbleOutlineRoundedIcon} />
                <HeaderOption Icon={NotificationsNoneRoundedIcon} />
                <HeaderOption avatar={ true } />
            </HeaderRight>
        </HeaderContainer>
    )
}

export default Header

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--primary-color);
    color: white;
    padding-top: 15px;
    padding-bottom: 15px;
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.24);
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    flex: 0.2;
    justify-content: center;
    
    > img {
        object-fit: contain;
        height: 50px;
    }
`

const HeaderMiddle = styled.div`
    display: flex;
    align-items: center;
    flex: 0.4;
    background-color: var(--secondary-color);
    height: 25px;
    border-radius: 10px;
    padding: 5px 0;

    > .MuiSvgIcon-root {
        padding-left: 10px;
    }

    > input {
        border: none;
        background-color: transparent;
        outline: none;
        color: white;
        padding-left: 10px;
        width: 100%;
        font-size: 14px;
    }
`

const HeaderRight = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex: 0.2;
    padding-right: 20px;
    
    > .MuiSvgIcon-root:hover {
        cursor: pointer;
        background-color: var(--secondary-color);
        border-radius: 50px;
    }
`