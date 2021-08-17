import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectUser } from '../features/userSlice'
import { auth } from '../firebase'

import SidebarOptions from './SidebarOptions'

import { Avatar } from '@material-ui/core'
import GroupRoundedIcon from '@material-ui/icons/GroupRounded'
import ImageRoundedIcon from '@material-ui/icons/ImageRounded'
import VideocamRoundedIcon from '@material-ui/icons/VideocamRounded'
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded'
import ChatBubbleOutlineRoundedIcon from '@material-ui/icons/ChatBubbleOutlineRounded'
import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded'


function Sidebar() {

    const user = useSelector(selectUser)

    const dispatch = useDispatch()

    const logoutOfApp = () => {
        dispatch(logout())
        auth.signOut()
    }



    return (
        <SidebarContainer>
                <Avatar style={{height: 80, width: 80, marginBottom: 10, fontSize: 40}} src={ user.photoUrl }>{ user.displayName[0] }</Avatar>
                <h2>{ user.displayName }</h2>
                <p><strong>1.5k</strong> Followers </p>
                <SidebarOptionsList>
                    <SidebarOptions Icon={GroupRoundedIcon} title="Friends" />
                    <SidebarOptions Icon={ChatBubbleOutlineRoundedIcon} title="Messages" />
                    <SidebarOptions Icon={FavoriteRoundedIcon} title="Liked Posts" />
                    <SidebarOptions Icon={ImageRoundedIcon} title="Pictures" />
                    <SidebarOptions Icon={VideocamRoundedIcon} title="Videos" />
                    <SidebarOptions Icon={ExitToAppRoundedIcon} title="Logout" onClick={logoutOfApp} />
                </SidebarOptionsList>            
        </SidebarContainer>
    )
}

export default Sidebar;

const SidebarContainer = styled.div`
    flex: 0.2;
    text-align: center;
    top: 100px;
    position: sticky;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    background-color: white;
    padding: 20px 10px;
    box-shadow: 1px 1px 0 2px rgba(0, 0, 0, 0.20);

    > h2 {
        font-size: 20px;
    }

    > p {
        color: gray;
        padding-bottom: 20px;
    }
`

const SidebarOptionsList = styled.div`
    align-items: flex-start;
`

