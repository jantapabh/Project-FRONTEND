import React, { Component, useState, useEffect } from 'react';
import './css/SignUp.css'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import './css/Login.css'
import logo2 from '../static/images/logo2.png'
import LoginBar from '../components/LoginBar'
import service from '../components/service'
import { Modal } from 'react-bootstrap';

const SignUp = () => {

    const [data, setData] = useState()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, sertPassword] = useState('')
    const [visible, setVisible] = useState(false);
    const [visibleSignup, setVisibleSignup] = useState(false);
    const [status, setStatus] = useState(false);
    const [show, setShow] = useState(false);
    

    const fetchSignUp = async () => {
        let res = await service({
            url: '/auth/signup',
            method: 'post',
            data: {
                email:email,
                username: username,
                password: password
            }
        })
        if(res.status === 200)
        {
            console.log(res.data)
            console.log("Signup Success!")
            
        }
        
        alert('Sigup Success')
}

    return (
        <div>
            <div>
                <LoginBar />
                <Container component="main" maxWidth="xs">
                    <div className="paper">
                        {/* <h2>LOG IN</h2> */}
                        <Typography component="h1" variant="h5">
                            <img src={logo2} style={{ borderRadius: 3000, height: 200, width: 200, margin: 20, padding: 10 }} /></Typography>
                        <form className="form" noValidate>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Username"
                                name="username"
                                autoComplete="username"
                                autoFocus
                                onChange={(e)=> setUsername(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                onChange={(e)=> setEmail(e.target.value)}
                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Password"
                                name="password"
                                autoComplete="password"
                                autoFocus
                                type="password"
                                onChange={(e)=> sertPassword(e.target.value)}

                            />
                            <TextField
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Comfirm Password"
                                name="password"
                                autoComplete="password"
                                autoFocus
                                type="password"
                                onChange={(e)=> sertPassword(e.target.value)}


                            />

                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className="submit"
                                style={{ height: 60, borderRadius: 90 }}
                                onClick={fetchSignUp}
                            >  ลงทะเบียน</Button>
                        </form>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default SignUp;
