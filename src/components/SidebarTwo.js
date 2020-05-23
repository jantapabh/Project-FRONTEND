import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, NavDropdown, FormControl, Form } from 'react-bootstrap';


//ใช้  react bootstrap 
//Tapbar สำหรับเอาไว้แสดงหน้าส่วน login 
function SidebarTwo(props) {
    return (
        <div>
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="/">
                    <Button variant="outline-info" style={{width: 150, height: 60, borderRadius: 60,margin: 5, padding: 5}}>
                        <h3>ย้อนกลับ</h3>
                    </Button></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                    <Button variant="info" href="/chat" style={{width: 230, height: 60, borderRadius: 60, margin: 5, padding: 5}}>
                            <h3>สอบถามเพิ่มเติม</h3>
                            </Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}
export default SidebarTwo;

