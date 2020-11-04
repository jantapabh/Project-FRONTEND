import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Steps } from 'antd';
import './scss/agency.scss'
import how1 from '../static/images/how1.png'
import how2 from '../static/images/how2.png'
import how3 from '../static/images/how3.png'


const { Step } = Steps;
const Agency = () => {

    const isTablet = useMediaQuery({ maxDeviceWidth: 1025 })
    const isMobile = useMediaQuery({ maxDeviceWidth: 768 })
    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })

    const [card, setCard] = useState([
        {
            img: "/static/images/content.png",
            box: "1",
            content: "เตรียมเอกสาร",
            description: "บัตรประชาชน ทะเบียนบ้าน สมุดบัญชีเงินฝาก",
        },
        {
            img: "./src/static/how2.png",
            box: "2",
            content: "เตรียมเอกสาร",
            description: "บัตรประชาชน ทะเบียนบ้าน สมุดบัญชีเงินฝาก",
        },
        {
            img: "./src/static/how3.png",
            box: "3",
            content: "เตรียมเอกสาร",
            description: "บัตรประชาชน ทะเบียนบ้าน สมุดบัญชีเงินฝาก",
        },
    ])

    return (
        <div className="warp-agency">
            {
                isSmallScreen ?
                    <React.Fragment>
                        <div className="head-agency">
                            <h3>วิธีการลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ</h3>
                            <div className="title-agency">
                                <h6>โดยการลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ</h6>
                                <h6>ไม่จำเป็นต้องไปลงทะเบียนใหม่ทุกปี ลงเพียงครั้งเดียวก็ได้รับสิทธิไปตลอด</h6>
                                <h6><sup>*</sup>เว้นแต่กรณีที่ผู้สูงอายุย้ายที่อยู่อาศัย</h6>
                            </div>
                        </div>
                        <div className="content-agency-mobile">
                            <Steps progressDot current={3} direction="vertical">
                                {
                                    card.map((items, index) => (
                                        <Step key={index} title={items.content} description={items.description} />
                                    ))
                                }
                            </Steps>
                        </div>
                    </React.Fragment>
                    :
                    isMobile || isTablet ?
                        <React.Fragment>
                            <div className="head-agency">
                                <h3>วิธีการลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ</h3>
                                <div className="title-agency">
                                    <h6>โดยการลงทะเบียนรับเบี้ยยังชีพผู้สูงอายุ</h6>
                                    <h6>ไม่จำเป็นต้องไปลงทะเบียนใหม่ทุกปี ลงเพียงครั้งเดียวก็ได้รับสิทธิไปตลอด</h6>
                                    <h6><sup>*</sup>เว้นแต่กรณีที่ผู้สูงอายุย้ายที่อยู่อาศัย</h6>
                                </div>
                            </div>
                            <div className="content-agency-mobile">
                                <Steps progressDot current={3} direction="vertical">
                                    {
                                        card.map((items, index) => (
                                            <Step key={index} title={items.content} description={items.description} />
                                        ))
                                    }
                                </Steps>
                                <img src="/static/agency.png" alt="img-agency" />
                            </div>
                        </React.Fragment>
                        :
                        <React.Fragment>
                            <div className="head-agency">
                                <h3>วิธีการใช้งาน AI ELDERY</h3>
                                <svg>
                                    <line x1="100" y1="0" x2="200" y2="0" />
                                </svg>
                                <div className="title-agency">
                                    <h6>โดยการเข้าใช้งาน AI ELDERY</h6>
                                    <h6>จำเป็นต้องมีอุปกรณ์ที่ใช้ตรวจจับการเคลื่อนไหวใช้งานพร้อมกับเว็บไซต์</h6>
                                    <h6><sup>*</sup>โดยสามารถเข้าใช้งานได้ทุกเมื่อหากมีอุปกรณ์ตรวจจับ</h6>
                                </div>
                            </div>
                           
                            <div className="content-agency">
                                {
                                   
                                        <div className="content-agency-card">
                                            <img src={how1} />
                                            <div className="agency-box">
                                                <h5>1</h5>
                                            </div>
                                            <p>เลือกส่วนติดต่อเรา</p>
                                        </div>
                                    
                                }
                                
                                {
                                   
                                        <div className="content-agency-card">
                                            <img src={how2} />
                                            <div className="agency-box">
                                                <h5>2</h5>
                                            </div>
                                            <p>รอเจ้าหน้าที่ลงทะเบียน</p>
                                        </div>
                                    
                                }
                                  {
                                   
                                   <div className="content-agency-card">
                                       <img src={how3} />
                                       <div className="agency-box">
                                                <h5>3</h5>
                                            </div>
                                            <p>รับอุปกรณ์และเข้าใช้งานระบบ</p>
                                   </div>
                               
                           }
                          
                            </div>
        
                        </React.Fragment>

            }

        </div>
    )
}
export default Agency;