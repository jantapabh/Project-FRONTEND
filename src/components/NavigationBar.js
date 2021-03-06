import React, { useState } from 'react';
import { Button, Form, Nav, NavDropdown, Navbar, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import service from '../components/service'
import fire from '../config/fire'


const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;


const NavigationBar = () => {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const logout = e => {

    fire.auth().signOut();
  }

  return (
    <div>
      <Styles>
        <Navbar expand="lg">
          <Navbar.Brand href="/">AI ELDERY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
          <Navbar.Brand href="/" onClick={logout}> LOGOUT</Navbar.Brand>
        </Navbar>
      </Styles>
    </div>
  )
}

export default NavigationBar