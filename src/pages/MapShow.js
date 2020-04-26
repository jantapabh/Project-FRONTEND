import React, { useState, useEffect } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Bootstrap react
import { Card } from 'react-bootstrap'

//MDB

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Bulma

import { Button, Level, Heading, } from 'react-bulma-components/dist'

//Components Based
import MapTwo from '../components/Map/MapTwo';
import SidebarMap from '../components/Map/SidebarMap'
import ListShow from '../components/ListShow'


const MapShow = () => {

    
    return (
        <div>
            <div>
                <SidebarMap />
            </div>
            <div>
                {/* ใส่ส่วน mapTwo กับ List  */}
            </div>
        </div>
    )
}

export default MapShow;


