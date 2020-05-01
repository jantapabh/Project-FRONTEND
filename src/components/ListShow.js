import React, { useState } from 'react';
import { Toast } from 'react-bootstrap'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, Row } from 'reactstrap';


//แสดงรายการในส่วน map สำหรับส่วนข้อมูลที่จำเป็น สถานะ การแจ้งเตือน โอกาสเสี่ยง



const ListShow = props => {

  const {
    buttonLabel,
    className
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);



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
              <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>ข้อมูลผู้ใช้</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>ข้อมูลผู้ใช้</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>ข้อมูลผู้ใช้</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
              <Modal isOpen={modal} fade={false} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>ข้อมูลผู้ใช้</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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