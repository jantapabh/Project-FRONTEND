import React, { useState, useEffect, Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown, FormControl, Form } from 'react-bootstrap';
import SidebarTwo from '../components/SidebarTwo'
import logo2 from '../static/images/logo2.png'
import firebase from 'firebase'
import './Login.css'
import Dashboard from '../components/Dashboard'



//Use Firebase Login

import fire from '../config/fire'

//Use Material UI

class Login extends Component {


    constructor(props) {


        super(props)
        this.LoginButton = this.LoginButton.bind(this)
        this.RegisterButton = this.RegisterButton.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.state = {

            email: "",
            password: "",
            user: {}

        }
    }

    componentDidMount() {
        this.authListener()
    }

    authListener() {
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user })
            }
            else {
                this.setState({ user: null })
            }

        })
    }



    LoginButton(e) {

        e.preventDefault()
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })
    }

    RegisterButton(e) {

        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
            console.log(user)
        }).catch((err) => {
            console.log(err)
        })
    }

    handleChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });

    }

    //Check User Login

    render() {

        if (this.state.user == null) {

            //  ส่วน Render

            return (
                <div>
                    <SidebarTwo />
                    <div>
                        <Container component="main" maxWidth="xs">
                            <div className="paper">
                                <Typography component="h1" variant="h5">
                                    <img src={logo2} style={{ borderRadius: 3000, height: 200, width: 200 }} /></Typography>
                                <form className="form" noValidate>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        value={this.state.email}
                                        onChange={this.handleChange}

                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className="submit"
                                        onClick={this.LoginButton}
                                        style={{ height: 60, borderRadius: 90 }}
                                    >
                                        Sign In
          </Button>
                                   
                                </form>
                            </div>
                        </Container>
                    </div>
                </div>
            )
        }

        return (
            <div>
                <Dashboard />
            </div>
        )
    }

}



export default Login