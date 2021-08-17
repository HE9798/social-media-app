import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import Spinner from 'react-spinkit';
import styled from 'styled-components';

import Login from './components/Login'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import PostsList from './components/PostsList';
import RightSidebar from './components/RightSidebar';

function App() {

  const account = useSelector(selectUser)
  const dispatch = useDispatch()
  const [user, loading] = useAuthState(auth)

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch(login({
          uid: userAuth.id,
          email: userAuth.email,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [dispatch])

  if(loading) {
    return (
      <AppLoading>
        <AppLoadingContents>
          <Spinner name="ball-spin-fade-loader" color="purple"/>
        </AppLoadingContents>
      </AppLoading>
    )
  }

  return (
    <div className="App">
      <Router>
        { !account || !user ? (<Login />) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Switch>
                <Route path="/">
                  <PostsList />
                </Route>
              </Switch>
              <RightSidebar />
            </AppBody>
          </>
        ) }
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  background-color: whitesmoke;
  display: flex;
  /* padding-top: 30px; */
  padding-left: 20px;
  padding-right: 20px;
`

const AppLoading = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
`
const AppLoadingContents = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
`