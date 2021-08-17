import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCu3vyBe4oBGAbyofCXKpHdiloK3LTfNWI",
    authDomain: "social-call-9057a.firebaseapp.com",
    projectId: "social-call-9057a",
    storageBucket: "social-call-9057a.appspot.com",
    messagingSenderId: "1058869474185",
    appId: "1:1058869474185:web:7258c3aaebc39a6bca6758"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }