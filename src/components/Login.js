import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'
import { auth, provider } from '../firebase'
import styled from 'styled-components'

function Login() {

    const [name, setName] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch()

    const loginToApp = (e) => {
        e.preventDefault()

        if(!email || !password) {
            return alert("Please fill in the form!")
        }

        auth.signInWithEmailAndPassword(email, password)
        .then((userAuth) => {
            dispatch(login({
                uid: userAuth.user.uid,
                email: userAuth.user.email,
                displayName: userAuth.user.displayName,
                photoURL: userAuth.user.photoURL,
            }))
        })
        .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault()

        if(!name || !email || !password) {
            return alert("Please fill in the form!")
        }

        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            })

            .then(() => {
                dispatch(login({
                    uid: userAuth.user.uid,
                    email: userAuth.user.email,
                    displayName: userAuth.user.displayName,
                    photoURL: userAuth.user.photoURL,
                }))
            })
        })
        .catch(error => alert(error.message))
    } 

    const GoogleLogin = (e) => {
        e.preventDefault()

        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }

    return (
        <LoginContainer>
            <LoginInnerContainer>
                <img src="./logo-2.png" alt="" />
                <form>
                    <input value={ name } onChange={ e => setName(e.target.value)} type="text" placeholder="Full name (Required on registering)" />
                    <input value={ profilePic } onChange={ e => setProfilePic(e.target.value)} type="text" placeholder="Profile Pic URL (Optional)" />
                    <input value={ email } onChange={ e => setEmail(e.target.value)} type="email" placeholder="Email address" />
                    <input value={ password } onChange={ e => setPassword(e.target.value)} type="password" placeholder="Password" />
                    <FormButtons>
                        <button type="submit" onClick={ loginToApp }>Sign in</button>
                        <button type="submit" onClick={ register }>Register</button>
                    </FormButtons> 
                    <button type="submit" onClick={GoogleLogin}><img src="./google-logo.png" alt="" /></button>
                </form>
            </LoginInnerContainer>
        </LoginContainer>
        
    )
}

export default Login

const LoginContainer = styled.div`
    background-color: #e9e9e9;
    height: 100vh;
    display: flex;
    align-items: center;
`

const LoginInnerContainer = styled.div`
    display: grid;
    place-items: center;
    object-fit: contain;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
    padding-bottom: 100px;
    background-color: white;
    border-radius: 10px;
    width: 30vw;
    height: auto;
    box-shadow: 1px 1px 0 2px rgba(0, 0, 0, 0.20);

    > img {
        object-fit: contain;
        height: 50px;
        margin-bottom: 20px;
    }

    > form {
        display: flex;
        flex-direction: column;
    }

    > form > input {
        width: 350px;
        height: 50px;
        font-size: 16px;
        padding-left: 10px;
        margin-bottom: 10px;
        border-radius: 10px;
    }

    > form > button {
        border-radius: 10px;
        margin-top: 10px;
        background-color: #ff0000;
        font-size: large;
        height: 60px;
        width: 100%;
        align-items: center;
        justify-content: center;
        object-fit: contain;
    }

    > form > button > img {
        height: 30px;
    }

    > form > button:hover {
        cursor: pointer;
        background-color: #af1607;
    }
`

const FormButtons = styled.div`
    display: flex;
    align-items: center;

    > button {
        border-radius: 10px;
        color: white;
        font-size: large;
        background-color: var(--secondary-color);
        width: 50%;
        height: 50px;
    
        :hover {
            cursor: pointer;
            background-color: var(--primary-color);
        }
    }
`