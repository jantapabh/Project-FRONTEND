import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from '../components/Sidebar'
import Main from './Main'
import Cover from '../components/MainHome'
// Show หน้านี้ทุกครั้งเมื่อผู้ฝช้เข้ามาและสามารถดูข้อมูลได้คราวๆ เกี่ยวกับผู้สูงอายุ
//หน้านี้มี SIdebar + รูปและก็ Main โดยหน้านี้จะแสเงสำหรับผู้ใช้ทั่วไป
//หน้านี้คือหน้าแรกที่ผู้ใช้เข้ามา

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    }
}));

//เรียก cover ที่นี้
export default function Pricing() {

    const classes = useStyles();
    return (
        <div>
            <Sidebar />
            <div>
               <MainHome />
            </div>
            <Main />
        </div>
    );
}