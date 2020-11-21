import React, {Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar,  Form } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import SignUp from '../pages/SignUp'

//หน้าหลัก
const LoginBar = () => {
    return (
        <div>
           <Navbar bg="white" expand="lg">
                <Navbar.Brand href="/">
                    <Button variant="outline-success" style={{width: 230, height: 60, borderRadius: 60,margin: 5, padding: 5}}>
                        <h2>ย้อนกลับ</h2>
                    </Button></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                </Navbar.Collapse>
            </Navbar> 
        </div>
    );
}

export default LoginBar;

