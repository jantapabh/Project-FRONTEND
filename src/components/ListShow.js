import React, { useState } from 'react';
import { Toast } from 'react-bootstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Row, Col } from 'reactstrap';

//แสดงรายการในส่วน map สำหรับส่วนข้อมูลที่จำเป็น สถานะ การแจ้งเตือน โอกาสเสี่ยง


const ListShow = props => {

  const {
    buttonLabel,
    className
  } = props;


  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);
  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  }
  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  }

  return (

    <div style={{ margin: 5, padding: 5 }}>
      <Toast>
        <Toast.Body>
          <Row>
            <Col xs="7">
              <Button outline color="primary">ผู้สูงอายุคนที่ 1</Button>{' '}
              </Col>
            <Col xs="5">
              <Button color="danger" onClick={toggle}>ดูข้อมูล</Button>
              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>ข้อมูลผู้ใช้</ModalHeader>
                <ModalBody>
                  
                  {/* เพิ่มข้อมูลผู้ใข้ */}
         
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
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
              <Button color="danger" onClick={toggle}>ดูข้อมูล</Button>
              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>ข้อมูลผู้ใช้</ModalHeader>
                <ModalBody>
                  {/* เพิ่มข้อมูลผู้ใข้ */}
          <br />
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
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
              <Button color="danger" onClick={toggle}>ดูข้อมูล</Button>
              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                 {/* เพิ่มข้อมูลผู้ใข้ */}
                 </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
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
              <Button color="danger" onClick={toggle}>ดูข้อมูล</Button>
              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                 
                  {/* เพิ่มข้อมูลผู้ใข้ */}
          <br />

                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </Col>
          </Row>
        </Toast.Body>
      </Toast>
    </div>

  )
}
export default ListShow;