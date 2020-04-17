import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBCardBody } from "mdbreact";
import { Player } from 'video-react';
import show from '../static/images/show.gif'
import ChartOne from '../components/charts/ChartOne'
import accidentChart from '../components/charts/accidentChart'
import CardHome from '../components/charts/CardHome'

//ส่วนหน้าหลักในการแสดงข้อมูลของผู็สูงอายุสำหรับผู้ใช้ทั่วไป
//ข้อมูลที่ควรมี
//

const Main = () => {

    return (
        <div>
            <MDBCardBody>
                <MDBRow>
                    <MDBCol lg="6">
                    <a href="#!" className="green-text">
                            <h4 className="font-weight-light mb-3">
                                <MDBIcon fab icon="accessible-icon" className="pr-2" size="3x" />ร้อยละของผู้สูงอายุจำแนกตามกลุ่มวัย</h4>
                        </a>
                        <h5 className="font-weight-light mb-3 p-3">
                            <strong>อ้างอิงข้อมูลจาก : สำนักงานสถิติแห่งชาติ  </strong>
                        </h5>
                        <Card border="white" style={{ width: '42rem', height: '23rem', padding: 30, margin: 10, borderRadius: 200 }} center>
                            <ChartOne />
                        </Card>
                    </MDBCol>
                    <MDBCol lg="6">
                    <a href="#!" className="green-text">
                            <h4 className="font-weight-light mb-3">
                                <MDBIcon fab icon="accessible-icon" className="pr-2" size="3x" />อุบัติเหตุการหกล้มในผู้สูงอายุและการป้องกัน</h4>
                        </a>
                        <h5 className="font-weight-light mb-3 p-3">
                            <strong>อ้างอิงข้อมูลจาก: กรมควบคุมโรค </strong>
                        </h5>
                        <Card border="white" style={{ width: '42rem', height: '23rem', }} center>
                            <img src={show} style={{ width: 670, height: 370, borderRadius: 200 }} />
                        </Card>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
            <MDBCardBody>
                <MDBRow>
                    <MDBCol lg="4">
                        <Card border="primary" style={{ width: '90rem', height: '10rem', padding: 10, margin: 10, borderRadius: 100 }}>
                       วิธีเข้าใช้งานระบบ
                        </Card>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
            <MDBCardBody>
                <MDBRow>
                    <MDBCol lg="4">
                        <Card border="primary" style={{ width: '20rem', height: '20rem', marginLeft: 90,borderRadius: 100 }}>
                       {/* 1) ติดต่อผู้ให้บริการเพื่อลงทะเบียนและรับอุปกรณ์ */}
                        </Card>
                    </MDBCol>
                    <MDBCol lg="4">
                        <Card border="primary" style={{ width: '20rem', height: '20rem',marginLeft: 90, borderRadius: 100 }}>
                        {/* 2) รอดำเนินการจากระบบในการเพิ่มข้อมูลไปยังฐานข้อฒูล */}
                        </Card>
                    </MDBCol>
                    <MDBCol lg="4">
                        <Card border="primary" style={{ width: '20rem', height: '20rem', marginLeft: 90, borderRadius: 100 }}>
                        {/* 3) เมื่อดำเนินการเสร็จสิ้นแล้วรับรหัสผ่านและสามารภถดูการแจ้งเตือนต่าง ๆ ได้ */}
                        </Card>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
            <div>
            </div>
        </div>
    )
}

export default Main;