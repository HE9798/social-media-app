import React from 'react'
import styled from 'styled-components'

function PostReaction({ Icon, title, color }) {
    return (
        <PostReactionItem>
            <Icon style={{ color: color, width: 100, paddingTop: 5  }} />
            <h4 style={{ paddingBottom: 5 }}>{ title }</h4>
        </PostReactionItem>
    )
}

export default PostReaction

const PostReactionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    :hover {
        cursor: pointer;
        background-color: #e9e9e9;
        border-radius: 30px;
    }

    > h4 {
        color: gray;
        font-size: 14px;
    }
`