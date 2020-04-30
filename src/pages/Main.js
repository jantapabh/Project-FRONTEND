import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBCardBody } from "mdbreact";
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



//ส่วนหน้าหลักในการแสดงข้อมูลของผู็สูงอายุสำหรับผู้ใช้ทั่วไป
//ข้อมูลที่ควรมี



const Main = () => {

    return (
        <div>
            <MDBCardBody>
                <MDBRow>
                <MDBCol lg="4">
                        
                </MDBCol>
                </MDBRow>
            </MDBCardBody>
            <MDBCardBody>
                <MDBRow>
                    <MDBCol lg="4">
                        
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Main;