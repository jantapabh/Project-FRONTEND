import React from 'react';
import { Accordion, Card, Modal, Button, Toast } from 'react-bootstrap'

//แสดงรายการในส่วน map สำหรับส่วนข้อมูลที่จำเป็น สถานะ การแจ้งเตือน โอกาสเสี่ยง


const ListShow = props => {

  return (

    <div style={{ margin: 5, padding: 5}}>
      <Toast>
        <Toast.Header>
          <strong className="mr-auto">Bootstrap</strong>
          <small>just now</small>
        </Toast.Header>
        <Toast.Body>See? Just like this.</Toast.Body>
      </Toast>
      <Toast>
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Bootstrap</strong>
          <small>2 second ago</small>
        </Toast.Header>
        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
      </Toast>
    </div>
    
  )
}
export default ListShow;