import React from 'react'
import styled from 'styled-components'

function SidebarOptions({ Icon, title, onClick }) {
    return (
        <SidebarOptionsContainer onClick={onClick}>
            { Icon && <Icon style={{ padding: 10 }} /> }
            { Icon && <h4 style={{ paddingRight: 10, fontSize: 14 }}>{ title }</h4> }
        </SidebarOptionsContainer>
    )
}

export default SidebarOptions

const SidebarOptionsContainer = styled.div`
    display: flex;
    align-items: center;
    color: gray;

    :hover {
        cursor: pointer;
        background-color: #e9e9e9;
        color: var(--secondary-color);
        border-radius: 50px;
    }
`