import React from 'react';
import { Accordion, Card, Modal, Button, Toast } from 'react-bootstrap'

//แสดงรายการในส่วน map สำหรับส่วนข้อมูลที่จำเป็น สถานะ การแจ้งเตือน โอกาสเสี่ยง


const ListShow = props => {

  return (

    <div style={{ margin: 5, padding: 5}}>
      <Toast>
        <Toast.Body>See? Just like this.</Toast.Body>
      </Toast>
      <Toast>
        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
      </Toast>
    </div>
    
  )
}
export default ListShow;