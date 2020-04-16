import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, Navbar, NavDropdown, FormControl, Form } from 'react-bootstrap';



function Sidebar(props) {
    return (
        <div>
            <Navbar bg="white" expand="lg">
                <Navbar.Brand href="#home">
                    <Button variant="outline-primary" style={{width: 230, height: 60, borderRadius: 60,margin: 5, padding: 5}}>
                        <h2>AI ELDERY</h2>
                    </Button></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    </Nav>
                    <Form inline>
                        <Button variant="outline-info" href="/login" style={{width: 150, height: 50, borderRadius: 50, margin: 5}}>
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

{/* <Navbar bg="light" expand="lg">
<Navbar.Brand href="#home">
    <h2>AI ELDERY</h2></Navbar.Brand>
<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    </Nav>
    <Dropdown as={ButtonGroup}>
        <Button variant="success">
        <h4>เริ่มต้นใช้งาน</h4></Button>
        <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
        <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">ข้อมูลอุบัติผู้สูงอายุ</Dropdown.Item>
            <Dropdown.Item href="#/action-2">แผนที่การเกิดอุบติเหตุ</Dropdown.Item>
            <Dropdown.Item href="#/action-3">เกี่ยวกับเรา</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
</Navbar.Collapse>
</Navbar> */}