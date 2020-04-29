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
                <MDBRow>
                    <MDBCol md="3">.col-md-3</MDBCol>
                    <MDBCol md="6">.col-md-4</MDBCol>
                </MDBRow>
            </div>
        </div>
    )
}

export default MapShow;


