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


const MapShow = () => {

    return (

        <div>
            <div>
                <SidebarMap />
            </div>
            <div>
                <MDBRow>
                    <MDBCol md="4">
                        <ListShow />
                    </MDBCol>
                    <MDBCol md="8">
                        <MapTwo />
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    )
}


export default MapShow;


