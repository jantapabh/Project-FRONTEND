// import React, { useState, useEffect, Component } from 'react';
import axios from 'axios'
import Icon from '@ant-design/icons';
import React, { useState,useEffect  } from 'react';
import ReactMapGL, { NavigationControl, Marker, Popup } from 'react-map-gl';
import Item from 'antd/lib/list/Item';
import '../App.css'

var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');



const Map = () => {


    const [isLoadding, setIsloadding] = useState(false);
    const [popupInfo, setPopupInfo] = useState(false);
    const [people, setPeople] = useState(false);

    const [viewport, setViewport] = useState({

        width: "100wh",
        height: "100vh",
        latitude: 7.878978,
        longitude: 98.398392,
        zoom: 12

    });



        return (

            <ReactMapGL
                {...viewport}
                onViewportChange={setViewport}
                mapStyle="mapbox://styles/mapbox/outdoors-v11"
                mapboxApiAccessToken="pk.eyJ1IjoiaGFtYTg5NyIsImEiOiJjazR6ZG5yY20wOWgzM21tcWVlbnFtOXB4In0.KjTfvistF0bqFqTk0OVsTA">
            </ReactMapGL>
        );
    }


export default Map;