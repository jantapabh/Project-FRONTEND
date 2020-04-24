import React, { useState, useEffect } from 'react';
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

{/* <MapTwo />
<ListShow /> */}

const MapShow = () => {

    return (

        <div>
            <div>
                <SidebarMap />
            </div>
           
        </div>
    )
}

export default MapShow;


