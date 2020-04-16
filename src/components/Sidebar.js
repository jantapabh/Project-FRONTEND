import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Nav, NavDropdown, Navbar, Dropdown, ButtonGroup } from 'react-bootstrap';



function Sidebar(props) {
    return (

        <Navbar bg="white" expand="lg">
            <Navbar.Brand href="#home">
                <h2>AI ELDERY</h2></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                    <Button variant="success">
                    <h4 style={{ fontFamily: 'serif'}}>เข้าสู่ระบบเพื่อใช้งาน</h4></Button>
            </Navbar.Collapse>  
        </Navbar>

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