import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
const Login = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
    else {
        firebase.app();
    }
    const handleGoogleSignIn = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(googleProvider)
            .then((result) => {
                console.log(result.user)
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode,errorMessage)
            });
    }


    return (
        <div>
            <Navbar ></Navbar>
            <div className='d-flex justify-content-center '>
                <button style={{ backgroundColor: '#ff7380' }} className='btn text-white p-3 m-4' onClick={handleGoogleSignIn}>Sign in with Google</button>
            </div>
        </div>
    );
};

export default Login;