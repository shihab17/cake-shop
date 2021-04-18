import React, { useContext } from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { LoggedInContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(LoggedInContext);
    
    const history = useHistory();
    const location = useLocation();
    // const { from } = location.state || loggedInUser.isAdmin ?  { from: { pathname: "/admin" } } : { from: { pathname: "/user" } }
    const { from } = location.state || { from: { pathname: "/" } }
    // if(loggedInUser.isAdmin){
    //     const { from } = location.state || { from: { pathname: "/admin" } }
    // }
    // else{
    //     const { from } = location.state || { from: { pathname: "/user" } }
    // }

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
                console.log(result.user.uid)
                const { displayName, email, photoURL,uid } = result.user;
                fetch('http://localhost:5000/isAdmin', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({ email: email })
                })
                    .then(res => res.json())
                    .then(data => {
                        const signedInUser = { name: displayName, email, photoURL, isAdmin: data }
                        setLoggedInUser(signedInUser)
                        sessionStorage.setItem('token',uid)
                        sessionStorage.setItem('loggedInUser',JSON.stringify(signedInUser))
                        // const {from} = data === true ? location.state || { from: { pathname: "/admin" } } : location.state || { from: { pathname: "/user" } }

                    });

                // history.replace(from);
                if(loggedInUser.isAdmin){
                    history.replace(location.state || '/admin')
                }
                else{
                    history.replace(location.state || '/user') 
                }
                // history.replace(location.state || loggedInUser.isAdmin===true ? '/admin' : '/user');
            }).catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
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