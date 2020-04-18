import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, NavDropdown, FormControl, Form } from 'react-bootstrap';
//ใช้  react bootstrap 


const SidebarMap = () => {

    return(
        <div>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="/dashboard">
                    <Button variant="outline-info" style={{width: 150, height: 45, borderRadius: 60,margin: 5, padding: 5}}>
                        <h4>ย้อนกลับ</h4>
                    </Button></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                    <Button variant="danger" href="/accident" style={{width: 250, height: 45, borderRadius: 60, margin: 5, padding: 5}}>
                            <h4>ข้อมูลการแจ้งเตือน</h4>
                            </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            </div>
    )
}

export default SidebarMap