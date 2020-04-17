import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from 'react-bootstrap';
import { MDBRow, MDBCol, MDBIcon, MDBCardBody } from "mdbreact";
import { Player } from 'video-react';
import show from '../static/images/show.gif'
import ChartOne from '../components/charts/ChartOne'
import accidentChart from '../components/charts/accidentChart'


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
                    <MDBCol lg="8">
                        <a href="#!" className="green-text">
                            <h4 className="font-weight-light mb-3">
                                <MDBIcon fab icon="accessible-icon" className="pr-2" size="3x" />อัตราการเสียชีวิตจากการหกล้มของผู้สูงอายุ</h4>
                        </a>
                        <h5 className="font-weight-light mb-3 p-3">
                            <strong>แผนภูมิแสดงอัตราการเสียชีวิตจากการหกล้มของผู้สูงอายุ ( 60 ปีขึ้นไป) จำแนกตามเขต ปี พ.ศ. 2561</strong>
                        </h5>
                        <Card border="info" style={{ width: '91rem', height: '30rem', padding: 10, margin: 10, borderRadius: 100 }}>
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