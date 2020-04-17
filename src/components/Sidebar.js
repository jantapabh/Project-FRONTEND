import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, NavDropdown, FormControl, Form } from 'react-bootstrap';

// Sidebar ที่เรียกใช้หน้าแรกที่ผู็ใช้เข้ามา 
//เรียกใช้หลักนี้ในไฟล์ Pricing

function Sidebar(props) {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="/">
                    <Button variant="outline-primary" style={{width: 230, height: 60, borderRadius: 60,margin: 5, padding: 5}}>
                        <h2>AI ELDERY</h2>
                    </Button></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        <Button variant="outline-info" href="/contact" style={{width: 150, height: 50, borderRadius: 50, margin: 5}}>
                            <h4>ติดต่อเรา</h4>
                            </Button>
                            <Button variant="info" href="/login" style={{width: 150, height: 50, borderRadius: 50,margin: 5}}>
                            <h4>เข้าสู่ระบบ</h4>
                            </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}

export default Sidebar;

