import React from 'react'
import ReactDOM from 'react-dom';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ShowMap = () => {

    return (
        <div>
            <Container>
                <Row>
                    <Col sm={8}>sm=8</Col>
                    <Col sm={4}>sm=4</Col>
                </Row>
            </Container>

        </div>
    )
}

export default ShowMap