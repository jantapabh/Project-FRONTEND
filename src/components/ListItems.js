import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

//import component

import MapShow from '../pages/MapShow'

const ListItems = () => {

  const [collapsed, setCollapsed] = useState(true);
  const toggleNavbar = () => setCollapsed(!collapsed);


  return (

    <div>
       <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>

  );
}

export default ListItems;


// กำหนดส่วนแสดงเมนูด้านข้างเมื่อกด


// export const mainListItems = (

//   <div>

// <Link href="/">
//       <ListItem button style={{borderRadius: 90}}>
//         <ListItemIcon>
//           <ArrowBackIosIcon />
//         </ListItemIcon>
//         <ListItemText primary="หน้าหลัก" />
//       </ListItem>
//     </Link>

//     <Link href="/dashboard">
//       <ListItem button style={{borderRadius: 90}}>
//         <ListItemIcon>
//           <DashboardIcon />
//         </ListItemIcon>
//         <ListItemText primary="ข้อมูลผู้สูงอายุ" />
//       </ListItem>
//     </Link>

//     <Link href="/map">
//       <ListItem button style={{borderRadius: 90}}>
//         <ListItemIcon>
//           <MapIcon />
//         </ListItemIcon>
//         <ListItemText primary="การแจ้งเตือนโดยแผนที่" />
//       </ListItem>
//     </Link>

//     <Link href="/customers">
//       <ListItem button style={{borderRadius: 90}}>
//         <ListItemIcon>
//           <BarChartIcon />
//         </ListItemIcon>
//         <ListItemText primary="ข้อมูลผู้ใช้" />
//       </ListItem>
//       </Link>

//       <Link href="/moreDetails">
//       <ListItem button style={{borderRadius: 90}}>
//         <ListItemIcon>
//           <LayersIcon />
//         </ListItemIcon>
//         <ListItemText primary="เพิ่มเติม" />
//       </ListItem>
//       </Link>

//   </div>
// );

//ส่วนเมนู 2


// const logout = e => {

//   e.preventDefault()

// fire.auth().signOut();
// }



// export const secondaryListItems = (

//     <div>

//       <ListSubheader inset>เกี่ยวกับระบบ</ListSubheader>

//       <Link href="/about">
//       <ListItem button style={{borderRadius: 90}}>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="แนะนำอุปกรณ์" />
//       </ListItem>
//       </Link>

//       <Link href="/how">
//       <ListItem button style={{borderRadius: 90}}>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="วิธีการใช้งาน" />
//       </ListItem>
//       </Link>

//       <Link href="/problem">
//       <ListItem button style={{borderRadius: 90}}>
//         <ListItemIcon>
//           <AssignmentIcon />
//         </ListItemIcon>
//         <ListItemText primary="ปัญหาการใช้งาน" />
//       </ListItem>
//       </Link>


//       <ListItem button style={{borderRadius: 90}}>
//         <ListItemIcon>
//           <AssignmentIcon onClick={logout} />
//         </ListItemIcon>
//         <ListItemText primary="ออกจากระบบ" />
//       </ListItem>

//     </div>
// );