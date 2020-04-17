import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Card } from 'react-bootstrap';
import "node_modules/video-react/dist/video-react.css"; // import css
import { MDBRow, MDBCol, MDBIcon, MDBCardBody } from "mdbreact";


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
                            <h4 className="font-weight-bold mb-3">
                                <MDBIcon fab icon="accessible-icon" className="pr-2" size="3x" />ข้อมูลผู้สูงอายุในปรเทศไทยปี 2560</h4>
                        </a>
                        <h7 className="font-family-normal mb-3 p-0">
                            <strong style={{ margin: 5 }}>อ้างอิงข้อมูลจาก</strong>
                        </h7>
                        <Card border="primary" style={{ width: '42rem', height: '23rem', padding: 30, margin: 10 }} center>

                        </Card>
                    </MDBCol>
                    <MDBCol lg="5">
                        <Player
                            playsInline
                            poster="/assets/poster.png"
                            src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                        />
                    </MDBCol>
                </MDBRow>
            </MDBCardBody>
            <MDBCardBody>
                <MDBRow>
                    <MDBCol lg="7">
                        <a href="#!" className="green-text">
                            <h6 className="font-weight-bold mb-3">
                                <MDBIcon icon="dog" className="pr-2" size="3x" /> Animal</h6>
                        </a>
                        <h5 className="font-weight-bold mb-3 p-0">
                            <strong>10 อับดับพื้นที่เกิดโรคพิษสุนัขบ้าสูงสุด 30 วันย้อนหลัง (ตั้งแต่ 11 มีนาคม - 10 เมษายน 2563)</strong>
                        </h5>
                        <Card border="primary" style={{ width: '91rem', height: '30rem', padding: 10, margin: 10 }}>

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