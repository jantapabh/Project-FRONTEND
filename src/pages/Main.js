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

//ส่วนหน้าหลักในการแสดงข้อมูลของผู็สูงอายุสำหรับผู้ใช้ทั่วไป
//ข้อมูลที่ควรมี



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
                        <Card border="info" style={{ width: '42rem', height: '25rem', padding: 30, margin: 10, borderRadius: 70}} center>
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
                        <Card border="info" style={{ width: '42rem', height: '23rem',borderRadius: 200 }} center>
                            <img src={show} style={{ width: 670, height: 370, borderRadius: 200 }} />
                        </Card>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
            <MDBCardBody center>
                    <MDBRow>
                        <MDBCol lg="9" lg="center">
                        <a href="#!" className="green-text">
                            <h4 className="font-weight-light mb-3">
                                <MDBIcon fab icon="accessible-icon" className="pr-2" size="3x" />แผนภูมิแสดงอัตราการเสียชีวิตของผู้สูงอายุจากการพลัดตกหกล้มจำแนกตามรายเขตปี พ.ศ. 2561</h4>
                        </a>
                        <h5 className="font-weight-light mb-3 p-3">
                            <strong>อ้างอิงข้อมูลจาก: ข้อมูลมรณบัตร พ.ศ.2561 กองยุทธศาสตร์และแผนงาน สำนักงานปลัดกระทรวงสาธารณสุข </strong>
                        </h5>
                            <Card border="info"  style={{ width: '91rem', height: '30rem', padding: 10, marginLeft: 20, }} center>
                              <ChartTwo  />
                            </Card>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            <MDBCardBody>
                <MDBRow>
                    <MDBCol lg="4">
                        <Card border="white" style={{ width: '90rem', height: '15rem', padding: 10, margin: 10, borderRadius: 100 }}>
                       <img src={howtouse} />
                       {/* วิธีการเข้าใช้งาน AI ELDERY */}
                        </Card>
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
            <MDBCardBody>
                <MDBRow>
                    <MDBCol lg="4">
                        <Card border="primary" style={{ width: '20rem', height: '20rem', marginLeft: 90,borderRadius: 100 }}>
                      <img src={how1} style={{ width: 300, height: 300, borderRadius: 100, }} />
                        {/* //ส่วนติดต่อ */}
                        </Card>
                    </MDBCol>
                    <MDBCol lg="4">
                        <Card border="primary" style={{ width: '20rem', height: '20rem',marginLeft: 90, borderRadius: 100 }}>
                        <img src={how2} style={{ width: 300, height: 300, borderRadius: 100, }} />
                        {/* //ส่วนรอลงทะเบียน */}
                        </Card>
                    </MDBCol>
                    <MDBCol lg="4">
                        <Card border="primary" style={{ width: '20rem', height: '20rem', marginLeft: 90, borderRadius: 100 }}>
                        <img src={how3} style={{ width: 300, height: 300, borderRadius: 200, }} />
                        {/* รับอุปกรณ์ */}
                        </Card>
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