import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBContainer } from "mdbreact";
import { Player } from 'video-react';
import show from '../static/images/show.gif'
import ChartOne from '../components/charts/ChartOne'
import howtouse from '../static/images/howtouse.png'
import how1 from '../static/images/how1.png'
import how2 from '../static/images/how2.png'
import how3 from '../static/images/how3.png'
import ChartTwo from '../components/charts/ChartTwo'
import Footer from '../components/Footer'
import footer3 from '../static/images/footer3.png'
import { useMediaQuery } from 'react-responsive'
import Info from '../components/Info.js'
import Agency from '../components/Agency.js'

//ส่วนหน้าหลักในการแสดงข้อมูลของผู็สูงอายุสำหรับผู้ใช้ทั่วไป
//ข้อมูลที่ควรมี

//ใส่ข้อฒูลแสดงปผระชากรผู้สูงอายุ

const Main = () => {

    return (
        <div>
      <Agency />
        </div>
    )
}

export default Main;