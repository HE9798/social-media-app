import React from 'react'
import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'

function HeaderOption({ Icon, avatar }) {

    const user = useSelector(selectUser)

    return (
        <HeaderOptionItem>
            { Icon && <Icon style={{ padding: 10 }} /> }
            { avatar && <Avatar style={{ height: 50, width: 50}} src={ user?.photoUrl }>{ user?.displayName[0] }</Avatar>}
        </HeaderOptionItem>
    )
}

export default HeaderOption

const HeaderOptionItem = styled.div`
    :hover {
        background-color: #532d84;
        cursor: pointer;
        border-radius: 50px;
    }
`