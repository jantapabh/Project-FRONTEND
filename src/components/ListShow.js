import React, { useState } from 'react';
import { Toast, Modal, Button, Row, Col } from 'react-bootstrap'



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
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
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