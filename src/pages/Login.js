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

//Use Firebase Login

import fire from '../config/fire'

//Use Material UI
// User ไม่สามารถเข้าใช้ระบบได้หากไม่ Login หรือเป็นสมาชิกของระบบ

class Login extends Component {

  

    

    //Check User Login

    render() {

            return (
                <div>
               <LoginBar />
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
                                       

                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        autoComplete="current-password"
                                       
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className="submit"
                                        style={{ height: 60, borderRadius: 90 }}
                                    > Sign In</Button>
                                </form>
                            </div>
                        </Container>
                    </div>
                </div>
            )
       
}

}



export default Login