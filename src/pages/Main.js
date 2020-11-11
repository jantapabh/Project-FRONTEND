import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBCardBody, MDBContainer } from "mdbreact";
import Footer from '../components/Footer'
import Agency from '../components/Agency.js'

//ส่วนหน้าหลักในการแสดงข้อมูลของผู็สูงอายุสำหรับผู้ใช้ทั่วไป
//ข้อมูลที่ควรมี

//ใส่ข้อฒูลแสดงปผระชากรผู้สูงอายุ

const Main = () => {

    return (
        <div>
          <div>
      <Agency />
      </div>
      <Footer />
        </div>
    )
}

export default Main;