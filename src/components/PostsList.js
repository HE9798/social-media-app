import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice'
import { db } from '../firebase'
import firebase from 'firebase';
import FlipMove from 'react-flip-move';

import InputOption from './InputOption'
import Post from './Post'

import { Avatar, Button } from '@material-ui/core'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded';
import ImageRoundedIcon from '@material-ui/icons/ImageRounded';
import EmojiEmotionsRoundedIcon from '@material-ui/icons/EmojiEmotionsRounded';
import PhotoCameraRoundedIcon from '@material-ui/icons/PhotoCameraRounded';

function PostsList() {

    const user = useSelector(selectUser)

    const [input, setInput] = useState("")
    const [posts, setPosts] = useState([])

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => 
            setPosts(
                snapshot.docs.map((doc) => 
                    ({
                        id: doc.id,
                        data: doc.data()
                    })
                )
            )
        )
    }, [])

    const sendPost = (e) => {
        e.preventDefault()

        db.collection("posts").add({
            name: user.displayName,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput("")
    }

    return (
        <PostsContainer>
            <InputContainer>
                <Input>
                    <Avatar style={{ margin: '0 10px', height: 50, width: 50 }}src={user.photoUrl}>{ user.displayName[0] }</Avatar>
                    <form>
                        <CreateRoundedIcon />
                        <input value={ input } onChange={ e => setInput(e.target.value) } type="text" placeholder={`Whats on your mind, ${user?.displayName}?`}/>
                        <Button onClick={sendPost} type="Submit">Send</Button>
                    </form>
                </Input>
                <InputOptions>
                    <InputOption Icon={PhotoCameraRoundedIcon} title="Take Photo/Video" color="#2a9df4" />
                    <InputOption Icon={ImageRoundedIcon} title="Upload Picture/Video" color="#e54140" />
                    <InputOption Icon={EmojiEmotionsRoundedIcon} title="Feeling/Activity" color="#ffce2e"  />
                </InputOptions>
            </InputContainer>
            <FlipMove>
                { posts.map(({ id, data: { name, message, photoUrl, timestamp } }) => 
                    <Post 
                        key={ id }
                        name={ name }
                        message = { message }
                        photoUrl= { photoUrl }
                        time= { new Date(timestamp?.seconds*1000).toUTCString() }
                    />
                )}
            </FlipMove>
        </PostsContainer>
    )
}

export default PostsList

const PostsContainer = styled.div`
    flex: 0.6;
    margin: 20px;
`

const InputContainer = styled.div`
    background-color: white;
    padding: 10px;
    padding-bottom: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
    box-shadow: 1px 1px 0 2px rgba(0, 0, 0, 0.20);
`

const Input = styled.div`
    display: flex;
    justify-content: space-evenly;
    color: gray;
    margin-top: 20px;
    
    > form {
        width: 100%;
        display: flex;
        border: 1px solid lightgray;
        border-radius: 30px;
        padding: 10px;
        padding-left: 15px;
    }

    > form > input {
        border: none;
        flex: 1;
        margin-left: 10px;
        outline-width: 0;
    }

    > form > button {
        display: none;
    }
`

const InputOptions = styled.div`
    display: flex;
    justify-content: space-evenly;
`