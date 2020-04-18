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
            <MDBRow>
                <MDBCol md="4">
                    <List />
                </MDBCol>
                <MDBCol md="8">
                    <ReactMapGL
                        {...viewport}
                        onViewportChange={setViewport}
                        mapStyle="mapbox://styles/mapbox/outdoors-v11"
                        mapboxApiAccessToken="pk.eyJ1IjoiaGFtYTg5NyIsImEiOiJjazR6ZG5yY20wOWgzM21tcWVlbnFtOXB4In0.KjTfvistF0bqFqTk0OVsTA">
                    </ReactMapGL>
                </MDBCol>
            </MDBRow>
        </div>
    )
}


export default MapShow;


