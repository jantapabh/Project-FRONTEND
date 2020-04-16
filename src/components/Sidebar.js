import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, NavDropdown, Navbar, Dropdown, ButtonGroup } from 'react-bootstrap';



export default function Sidebar(props) {
    return (

        <Navbar bg="white" expand="lg">
            <Navbar.Brand href="#home">
                <h2>AI ELDERY</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                    <Button variant="success">
                    <h4>LOG IN</h4></Button>
            </Navbar.Collapse>
        </Navbar>

    );
}

