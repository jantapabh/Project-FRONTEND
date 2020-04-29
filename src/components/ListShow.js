import React from 'react';
import { Accordion, Card, Modal, Button, Toast } from 'react-bootstrap'
import { Container, Row, Col } from 'reactstrap';

//แสดงรายการในส่วน map สำหรับส่วนข้อมูลที่จำเป็น สถานะ การแจ้งเตือน โอกาสเสี่ยง


const ListShow = props => {

  return (

    <div style={{ margin: 5, padding: 5 }}>
      <Toast>
        <Toast.Body>
          <Row>
            <Col xs="6">.col-6</Col>
            <Col xs="6">.col-6</Col>
          </Row>
        </Toast.Body>
      </Toast>
      <Toast>
        <Toast.Body>Heads up, toasts will stack automatically</Toast.Body>
      </Toast>
    </div>

  )
}
export default ListShow;