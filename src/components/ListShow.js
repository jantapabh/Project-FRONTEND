import React, { useState } from 'react';
import { Toast, Modal, Button, Row, Col } from 'react-bootstrap'
import { ListGroup, ListGroupItem, Progress } from 'reactstrap';

//แสดงรายการในส่วน map สำหรับส่วนข้อมูลที่จำเป็น สถานะ การแจ้งเตือน โอกาสเสี่ยง
const ListShow = props => {
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            ข้อมูลผู้ใช้
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ListGroup>
          <ListGroupItem active tag="a" href="#" action>สถานะ : ปกติ</ListGroupItem>
            <ListGroupItem  tag="a" href="#" action>ชื่อ : นาง จันเจ้า ดวงโต</ListGroupItem>
            <ListGroupItem tag="a" href="#" action>อายุ 70 ปี</ListGroupItem>
            <ListGroupItem tag="a" href="#" action>ที่อยู่ : ดาวอังคาร</ListGroupItem>
            <ListGroupItem tag="a" href="#" action>โรคประจำตัว : ไม่มี</ListGroupItem>
            <ListGroupItem disabled tag="a" href="#" action> 
            <h5>อัตราการเคลื่อนไหวผิดปกติ</h5>
            <div className="text-center">50%</div>
              <Progress value={50} color="success" /></ListGroupItem>
          </ListGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <div style={{ margin: 5, padding: 5 }}>
      <Toast>
        <Toast.Body>
          <Row>
            <Col xs="7">
              <Button outline color="primary">ผู้สูงอายุคนที่ 1</Button>{' '}
            </Col>
            <Col xs="5">
              <Button variant="danger" onClick={() => setModalShow(true)}>
                ดูข้อมูล
      </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
        </Toast.Body>
      </Toast>
      <Toast>
        <Toast.Body>
          <Row>
            <Col xs="7">
              <Button outline color="primary">ผู้สูงอายุคนที่ 2</Button>{' '}
            </Col>
            <Col xs="5">
              <Button variant="danger" onClick={() => setModalShow(true)}>
                ดูข้อมูล
      </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
        </Toast.Body>
      </Toast>
      <Toast>
        <Toast.Body>
          <Row>
            <Col xs="7">
              <Button outline color="primary">ผู้สูงอายุคนที่ 3</Button>{' '}
            </Col>
            <Col xs="5">
              <Button variant="danger" onClick={() => setModalShow(true)}>
                ดูข้อมูล
      </Button>
              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />

            </Col>
          </Row>
        </Toast.Body>
      </Toast>
      <Toast>
        <Toast.Body>
          <Row>
            <Col xs="7">
              <Button outline color="primary">ผู้สูงอายุคนที่ 4</Button>{' '}
            </Col>
            <Col xs="5">
              <Button variant="danger" onClick={() => setModalShow(true)}>
                ดูข้อมูล
      </Button>

              <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Col>
          </Row>
        </Toast.Body>
      </Toast>
    </div>

  )
}
export default ListShow;