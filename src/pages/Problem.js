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

import SidebarProblem from '../components/Map/SidebarProblem'
import ListShow from '../components/ListShow'


const Problem= () => {

    return (
        <div>
            <div>
                <SidebarProblem />
            </div>
            <div>
                <MDBRow>
                    <MDBCol md="3">
                        <ListShow />
                    </MDBCol>
                    <MDBCol md="9">
                       
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    )
}

export default Problem;


