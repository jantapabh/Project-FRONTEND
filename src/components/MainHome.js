import React from 'react'
import { useMediaQuery } from 'react-responsive'
import './scss/cover.scss'
import { Link } from 'react-router-dom';
import content2 from '../static/images/content2.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar, Form } from 'react-bootstrap';
import './scss/image.css'


//หน้าหลักแสดงบนเว็บส่วนบนสุด

const MainHome = prop => {
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 768.99 })

    return (
        <div className="warp-cover">
            <div className="page-content">
                {
                    isSmallScreen ?
                        <div className="container-fluid">
                            <div className="title">
                                <h1>เว็บไซต์สำหรับแจ้งเตือน</h1>
                                <h1>การเคลื่อนไหวของผู้สูงอายุ</h1>
                                <div className="detail">
                                    <div className="text-content">
                                        <h6>AI ELDERY เป็นการนำข้อมูลทางสถิติเกี่ยวกับผู้สูงอายุในพื้นที่จังหวัดภูเก็ต</h6>
                                        <h6>มาเเสดงผลในรูปของอินโฟกราฟฟิก</h6>
                                        <h6>รูปแบบต่าง ๆ</h6>
                                        <h6>และติดตามการเคลื่อนไหว</h6>
                                    </div>
                                </div>

                            </div>
                        </div>
                        :
                        <div className="container-fluid">
                            <div className="title">
                                <h1 className="animated fadeInDown delay-s">เว็บไซต์สำหรับแจ้งเตือน</h1>
                                <h1 className="animated fadeInDown delay-s">การเคลื่อนไหวของผู้สูงอายุ</h1>
                                <div className="detail">
                                    <svg className="animated zoomIn delay-1s" >
                                        <line x1="0" y1="0" x2="0" y2="100" />
                                    </svg>
                                    <div className="text-content">
                                        <h6 className="animated fadeInDown delay-1s">AI ELDERY เป็นการนำข้อมูลทางสถิติเกี่ยวกับผู้สูงอายุในพื้นที่จังหวัดภูเก็ต</h6>
                                        <h6 className="animated fadeInDown delay-1s">มาเเสดงผลในรูปของอินโฟกราฟฟิกและติดตามการเคลื่อนไหวของผู้สูงอายุ</h6>
                                    </div>
                                </div>
                                <Navbar expand="lg">
                                    <Navbar.Collapse id="basic-navbar-nav">
                                        <Form inline>
                                            <Button variant="info" href="/login" style={{ width: 150, height: 50, borderRadius: 50, margin: 5 }}>
                                                <h4>เข้าสู่ระบบ</h4>
                                            </Button>
                                        </Form>
                                    </Navbar.Collapse>
                                </Navbar>
                            </div>
                            <div className="img-baby-g-about for-desktop">
                                <img src={content2} alt="cover" />
                            </div>
                        </div>
                }

            </div>
        </div>
    )

}
export default MainHome
