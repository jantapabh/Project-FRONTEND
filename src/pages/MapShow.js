import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Icon from '@ant-design/icons';
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import Item from 'antd/lib/list/Item';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import SidebarMap from '../components/Map/SidebarMap'
import ListShow from '../components/ListShow'

//Bootstrap react
import { Card } from 'react-bootstrap'

//MDB

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Bulma

import { Button, Level, Heading, } from 'react-bulma-components/dist'
import MapTwo from '../components/Map/MapTwo';


//ส่วนแสดงการแจ้งเตือน Map
var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

const MapShow = () => {

    const [viewport, setViewport] = useState({

        width: "100wh",
        height: "130vh",
        latitude: 7.878978,
        longitude: 98.398392,
        zoom: 12

    });

    return (

        <div>
            <div>
                <SidebarMap />
            </div>
            <MDBRow>
                <MDBCol md="4">
                    <ListShow />
                </MDBCol>
                <MDBCol md="8">
                    <MapTwo />
                </MDBCol>
            </MDBRow>
        </div>
    )
}


export default MapShow;


