import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, NavDropdown, FormControl, Form } from 'react-bootstrap';



function SidebarTwo(props) {
    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Navbar.Brand href="/">
                    <Button variant="outline-info" style={{width: 150, height: 60, borderRadius: 60,margin: 5, padding: 5}}>
                        <h3>ย้อนกลับ</h3>
                    </Button></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                    <Button variant="outline-info" href="/chart" style={{width: 230, height: 60, borderRadius: 60, margin: 5, padding: 5}}>
                            <h3>สอบถามเพิ่มเติม</h3>
                            </Button>
                    <Button variant="info" href="/contact" style={{width: 150, height: 60, borderRadius: 60, margin: 5, padding: 5}}>
                            <h3>ติดต่อเรา</h3>
                            </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>

    );
}

export default SidebarTwo;

