import React, { forwardRef } from 'react'
import styled from 'styled-components'

import PostReaction from './PostReaction'

import { Avatar } from '@material-ui/core'
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';
import SendRoundedIcon from '@material-ui/icons/SendRounded';

const Post = forwardRef(({ name, message, photoUrl, time }, ref) => {
    return (
        <PostMain ref={ ref }>
            <PostHeader>
                <Avatar src={ photoUrl }>{ name[0] }</Avatar>
                <PostInfo>
                    <h2>{ name }</h2>
                    <p>{ time }</p>
                </PostInfo>
            </PostHeader>
            
            <PostBody>
                <div>
                    <p>{ message }</p>
                </div>
            </PostBody>
            <PostButtons>
                    <PostReaction Icon={ThumbUpAltRoundedIcon} title="Like" color="gray" />
                    <PostReaction Icon={ChatRoundedIcon} title="Comment" color="gray" />
                    <PostReaction Icon={ShareRoundedIcon} title="Share" color="gray" />
                    <PostReaction Icon={SendRoundedIcon} title="Send" color="gray" />
            </PostButtons>
        </PostMain>
    )
})

export default Post

const PostMain = styled.div`
    background-color: white;
    padding: 15px;
    margin-bottom: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 0 2px rgba(0, 0, 0, 0.20);
`
const PostHeader = styled.div`
    display: flex;
    margin-bottom: 10px;
`

const PostInfo = styled.div`
    margin-left: 10px;

    > h2 {
        font-size: 12px;
    }

    > p {
        font-size: 10px;
        color: gray;
    }
`
const PostBody = styled.div`
    overflow-wrap: anywhere;
    margin-bottom: 20px;
    margin-left: 10px;

    > div > p {
        font-size: 14px;
    }
`
const PostButtons = styled.div`
    display: flex;
    justify-content: space-evenly;
    border-top: 1px solid #c9c9c9;
    padding-top: 5px;
`