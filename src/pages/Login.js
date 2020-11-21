import React, { useState, useEffect, Component } from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, FormControl, Form } from 'react-bootstrap';
import logo2 from '../static/images/logo2.png'
import firebase from 'firebase'
import './css/Login.css'
import Dashboard from '../components/layout/Dashboard'
import LoginBar from '../components/LoginBar'
import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import SignUp from './SignUp'
import service from '../components/service'
import { useSpring, animated } from "react-spring";
//Use Firebase Login

import fire from '../config/fire'

//Use Material UI
// User ไม่สามารถเข้าใช้ระบบได้หากไม่ Login หรือเป็นสมาชิกของระบบ



const Login = () => {


    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isSignedIn, setIsSignedIn] = useState(false)




    // const fetchSignin = async () => {
    //     let res = await service({
    //         url: '/auth/login',
    //         method: 'post',
    //         data: {
    //             accountuser: username,
    //             password: password
    //         }
    //     })
    //     if (res.status === 200) {
    //         console.log(res.data)
    //     }

    //     alert('Login Success')
    // }

    const uiConfig = {

        signInFlow: "popup",
        signInOptions: [

            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID
        ],

        callback: {

            signInSuccess: () => false
        }
    }

    const componentDidMount = () => {



        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user })
        })
    }

    const login = e => {

        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }


    const signup = e => {

        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(email, password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }

    const [registrationFormStatus, setRegistartionFormStatus] = useState(false);
    const loginProps = useSpring({
        left: registrationFormStatus ? -500 : 0, // Login form sliding positions
    });
    const registerProps = useSpring({
        left: registrationFormStatus ? 0 : 500, // Register form sliding positions 
    });

    const loginBtnProps = useSpring({
        borderBottom: registrationFormStatus
            ? "solid 0px transparent"
            : "solid 2px #1059FF",  //Animate bottom border of login button
    });
    const registerBtnProps = useSpring({
        borderBottom: registrationFormStatus
            ? "solid 2px #1059FF"
            : "solid 0px transparent", //Animate bottom border of register button
    });

    function registerClicked() {
        setRegistartionFormStatus(true);
    }
    function loginClicked() {
        setRegistartionFormStatus(false);
    }




    //Check User Login

    return (
        <div>
            <LoginBar />
            <div>
                <div className="login-register-wrapper">
                    <div className="nav-buttons">
                        <animated.button
                            onClick={loginClicked}
                            id="loginBtn"
                            style={loginBtnProps}
                        >
                            Login
        </animated.button>
                        <animated.button
                            onClick={registerClicked}
                            id="registerBtn"
                            style={registerBtnProps}
                        >
                            Register
        </animated.button>
                    </div>
                    <div className="form-group">
                        <animated.form action="" id="loginform" style={loginProps}>

                            <label for="username">USERNAME</label>
                            <input type="text" id="email" id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <label for="password" >PASSWORD</label>
                            <input type="text" name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                onChange={(e) => setPassword(e.target.value)} />
                            <input type="submit" value="submit" className="submit" />

                        </animated.form>
                        <animated.form action="" id="registerform" style={registerProps}>

                            <label for="fullname">full name</label>
                            <input type="text" id="fullname" />
                            <label for="email">email</label>
                            <input type="text" id="email" />
                            <label for="password">password</label>
                            <input type="text" id="password" />
                            <label for="confirmpassword">confirm password</label>
                            <input type="text" id="confirmpassword" />
                            <input type="submit" value="submit" class="submit" />

                        </animated.form>
                    </div>
                    <animated.div className="forgot-panel" style={loginProps}>
                        <a herf="#">Forgot your password</a>
                    </animated.div>
                </div>
            </div>
        </div>

    );
}



export default Login