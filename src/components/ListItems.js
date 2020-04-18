import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import MapIcon from '@material-ui/icons/Map';
import Link from '@material-ui/core/Link';
import fire from '../config/fire';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


//import component

import MapShow from '../pages/MapShow'


// กำหนดส่วนแสดงเมนูด้านข้างเมื่อกด


export const mainListItems = (

  <div>

<Link href="/">
      <ListItem button style={{borderRadius: 90}}>
        <ListItemIcon>
          <ArrowBackIosIcon />
        </ListItemIcon>
        <ListItemText primary="หน้าหลัก" />
      </ListItem>
    </Link>

    <Link href="/dashboard">
      <ListItem button style={{borderRadius: 90}}>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="ข้อมูลผู้สูงอายุ" />
      </ListItem>
    </Link>

    <Link href="/map">
      <ListItem button style={{borderRadius: 90}}>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="การแจ้งเตือนโดยแผนที่" />
      </ListItem>
    </Link>

    <Link href="/customers">
      <ListItem button style={{borderRadius: 90}}>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="ข้อมูลผู้ใช้" />
      </ListItem>
      </Link>

      <Link href="/moreDetails">
      <ListItem button style={{borderRadius: 90}}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="เพิ่มเติม" />
      </ListItem>
      </Link>
   
  </div>
);

//ส่วนเมนู 2


const logout = e => {

  e.preventDefault()

fire.auth().signOut();
}



export const secondaryListItems = (

    <div>

      <ListSubheader inset>เกี่ยวกับระบบ</ListSubheader>

      <Link href="/about">
      <ListItem button style={{borderRadius: 90}}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="แนะนำอุปกรณ์" />
      </ListItem>
      </Link>

      <Link href="/how">
      <ListItem button style={{borderRadius: 90}}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="วิธีการใช้งาน" />
      </ListItem>
      </Link>

      <Link href="/problem">
      <ListItem button style={{borderRadius: 90}}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="ปัญหาการใช้งาน" />
      </ListItem>
      </Link>

      
      <ListItem button style={{borderRadius: 90}}>
        <ListItemIcon>
          <AssignmentIcon onClick={logout} />
        </ListItemIcon>
        <ListItemText primary="ออกจากระบบ" />
      </ListItem>
 
    </div>
);