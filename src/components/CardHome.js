import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardShow from './CardShow'
//Import Reshart
import {
    ResponsiveContainer, XAxis, YAxis, CartesianGrid,
    Tooltip, Legend, LineChart, Line, BarChart, Bar, PieChart,
    Pie, Cell,
} from 'recharts';

// React bootstrap
import { Container, Row, Col, Button, Card } from 'react-bootstrap'

const CardHome = props => {

    return (
        <div>
            <CardShow />
            <Container>
                <Row>
                    <Col><Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src="holder.js/100px180" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
    </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
    </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card></Col>
                </Row>
            </Container>
            </div>

    )
}

export default CardHome