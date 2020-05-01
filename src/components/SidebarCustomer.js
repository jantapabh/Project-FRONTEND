import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, NavDropdown, FormControl, Form } from 'react-bootstrap';

//ใช้  react bootstrap 
//Tapbar สำหรับเอาไว้แสดงหน้าส่วน login 

function SidebarCustomer(props) {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="/dashboard">
                    <Button variant="outline-info" style={{width: 150, height: 60, borderRadius: 60,margin: 5, padding: 5}}>
                        <h3>ย้อนกลับ</h3>
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

export default SidebarCustomer;
