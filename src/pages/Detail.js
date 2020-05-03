import React, { useState, useEffect } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Bootstrap react
import { Card } from 'react-bootstrap'

//MDB

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Components Based

import SidebarCustomer from '../components/SidebarCustomer';
import problem from '../static/images/problem.png'


const Detail = () => {

    return (

        <div>
            <div>
                <SidebarCustomer />
            </div>
            <div>
                <MDBRow style={{ display: 'flex', justifyContent: 'center', margin: 20 }}>
                    <MDBCol md="5">
                        <MDBContainer>
                            <img src={problem} />
                        </MDBContainer>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>

    )
}

export default Detail;


