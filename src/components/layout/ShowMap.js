import React from 'react'
import ReactDOM from 'react-dom';
import { Row, Col, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import MapTwo from '../Map/MapTwo'
import './map.css'

const ShowMap = () => {

    return (
        <div>
            <div className="item8">
                <MapTwo />
            </div>
        </div>
    )
}

export default ShowMap