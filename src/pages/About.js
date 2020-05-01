import React, { useState, useEffect } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Bootstrap react
import { Card } from 'react-bootstrap'

//MDB

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


//Components Based


import SidebarCustomer from '../components/SidebarCustomer';
import customer2 from '../static/images/customer2.png'


const About = () => {

    return (
        <div>
            <div>
                <SidebarCustomer/>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', margin: 20 }}>
                <MDBRow>
                    <MDBCol md="5">
                        <MDBContainer>
                            <img src={customer2} style={{ width: 400, height: 400 }} />
                        </MDBContainer>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    )
}

export default About;


