import React, { useState, useEffect } from 'react'
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import NavBar from './layout/NavBar';

const Error = () => {

    const isSmallScreen = useMediaQuery({ maxDeviceWidth: 575.98 })

    const [home, setHome] = useState(
        [
            { name: "เกี่ยวกับเรา" },
            { name: "สังคมผู้สูงอายุ" },
            { name: "เบี้ยยังชีพ"},
            { name: "ติดต่อ" },
        ]
    )

    const [homeMin, setHomeMin] = useState(
        [
            { name: "เกี่ยวกับเรา" },
            { name: "สังคมผู้สูงอายุ" },
            { name: "เบี้ยยังชีพ" },
            { name: "ติดต่อ"},
        ]
    )

    return (
        <div className="warp-error">
            <NavBar name="empty" tab={isSmallScreen ? homeMin : home} />
            <div className="content-error">
                <img src="/static/empty.jpg" alt="empty" />
                <div className="title-error">
                    <h4>ความผิดพลาด 404 หน้ายังไม่พร้อมใช้งาน</h4>
                    <h4>โปรดกลับสู่หน้าแรก</h4>
                </div>
            </div>
            <Link href="/">
                <h5>หน้าแรก</h5>
            </Link>
        </div>
    )
}
export default Error;