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
import fire from '../config/fire';
import Link from '@material-ui/core/Link';


//import component

import MapShow from '../pages/MapShow'


// กำหนดส่วนแสดงเมนูด้านข้างเมื่อกด


export const mainListItems = (

  <div>

    <Link href="/dashboard">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="ข้อมูลผู้สูงอายุ" />
      </ListItem>
    </Link>

    <Link href="/map">
      <ListItem button>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary="การแจ้งเตือนโดยแผนที่" />
      </ListItem>
    </Link>

    <Link href="/customers">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="ข้อมูลผู้ใช้" />
      </ListItem>
      </Link>

      <Link href="/customers">
      <ListItem button>
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
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="แนะนำอุปกรณ์" />
      </ListItem>
      </Link>

      <Link href="/how">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="วิธีการใช้งาน" />
      </ListItem>
      </Link>

      <Link href="/problem">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="ปัญหาการใช้งาน" />
      </ListItem>
      </Link>

 
      <ListItem button>
        <ListItemIcon onClick={logout}>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="ออกจากระบบ" />
      </ListItem>
      


    </div>
);