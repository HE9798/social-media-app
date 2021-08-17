import React from 'react'
import styled from 'styled-components'

function InputOption({ Icon, title, color }) {
    return (
        <InputOptionContainer>
            { Icon && <Icon style={{ padding: 10, color: color }} />}
            { Icon && <h4 style={{ paddingRight: 10, fontSize: 14}}>{ title }</h4>}
        </InputOptionContainer>
    )
}

export default InputOption

const InputOptionContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 15px;
    color: gray;
    cursor: pointer;

    :hover {
        background: whitesmoke;
        border-radius: 20px;
    }
`