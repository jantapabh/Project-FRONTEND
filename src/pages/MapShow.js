
import axios from 'axios'
import Icon from '@ant-design/icons';
import React, { useState, useEffect } from 'react';
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import Item from 'antd/lib/list/Item';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarMap from '../components/Map/SidebarMap'

//Bootstrap react
import { Container, Row, Col, ListGroup } from 'react-bootstrap'

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const MapShow = () => {

    const [viewport, setViewport] = useState({

        width: "50wh",
        height: "90vh",
        latitude: 7.878978,
        longitude: 98.398392,
        zoom: 12

    });

    return (

        <div>
            <div>
                <SidebarMap />
            </div>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-sm-4">
                        {/* ใส่ข้อมูลรายชื่อผู้ปวดพร้อมที่อยู่ อาการ สถานะ และความเสี่ยงที่เกิด */}
                    </div>
                    <div class="col-sm-8" >
                        <ReactMapGL
                            {...viewport}
                            onViewportChange={setViewport}
                            mapStyle="mapbox://styles/mapbox/outdoors-v11"
                            mapboxApiAccessToken="pk.eyJ1IjoiaGFtYTg5NyIsImEiOiJjazR6ZG5yY20wOWgzM21tcWVlbnFtOXB4In0.KjTfvistF0bqFqTk0OVsTA">
                        </ReactMapGL>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MapShow;