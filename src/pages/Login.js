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



//Use Firebase Login

import fire from '../config/fire'

//Use Material UI
// User ไม่สามารถเข้าใช้ระบบได้หากไม่ Login หรือเป็นสมาชิกของระบบ

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

            //  ส่วน Render จะเช็คเงื่อนไขเสมอว่าหากไม่มีการ สนเรื ก็จะไม่สามารถไปยัง Dashboard ได้

            return (
                <div>
               
                    <div>
                        <Container component="main" maxWidth="xs">
                            <div className="paper">
                                {/* <h2>LOG IN</h2> */}
                                <Typography component="h1" variant="h5">
                                    <img src={logo2} style={{ borderRadius: 3000, height: 200, width: 200 , margin: 20, padding: 10}} /></Typography>
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
                                    > Sign In</Button>
                                </form>
                            </div>
                        </Container>
                    </div>
                </div>
            )
        }
else{
        return (
            <div>
                <Dashboard />
                {/* หากผู้ใช้ login จะไปยังส่วน Dashboard */}
            </div>
        )
    }
}

}



export default Login