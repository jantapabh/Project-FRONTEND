import React from 'react'
import MapTwo from '../components/Map/MapTwo'
import SidebarCustomer from '../components/SidebarCustomer'

//ส่วนสำหรับเก็บข้อมูลของ users ที่ใช้งานระบบ
// เก็บข้อฒูล user ในรูปแบบ Card ซึ่งสามารถกดเพื่อดูข้อฒูแต่ในคนได้ 

const Customer = () => {

    return (

        <div>
          <SidebarCustomer />
        </div>

    )
}

export default Customer;