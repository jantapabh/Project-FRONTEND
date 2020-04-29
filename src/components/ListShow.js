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
            <Col xs="6">.col-6</Col>
            <Col xs="6">
              <Button color="danger" onClick={toggle}>ดูข้อมูล</Button>
              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
                  <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
                    <ModalHeader>Nested Modal title</ModalHeader>
                    <ModalBody>Stuff and things</ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
                      <Button color="secondary" onClick={toggleAll}>All Done</Button>
                    </ModalFooter>
                  </Modal>
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
            <Col xs="6">.col-6</Col>
            <Col xs="6">
              <Button color="danger" onClick={toggle}>ดูข้อมูล</Button>
              <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br />
                  <Modal isOpen={nestedModal} toggle={toggleNested} onClosed={closeAll ? toggle : undefined}>
                    <ModalHeader>Nested Modal title</ModalHeader>
                    <ModalBody>Stuff and things</ModalBody>
                    <ModalFooter>
                      <Button color="primary" onClick={toggleNested}>Done</Button>{' '}
                      <Button color="secondary" onClick={toggleAll}>All Done</Button>
                    </ModalFooter>
                  </Modal>
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