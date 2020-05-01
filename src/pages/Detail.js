import React, { useState, useEffect } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Bootstrap react
import { Card } from 'react-bootstrap'

//MDB

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


//Components Based


import SidebarCustomer from '../components/SidebarCustomer';


const Detail = () => {

    return (
        <div>
            <div>
                <SidebarCustomer/>
            </div>
            <div>
                <MDBRow>
                    <MDBCol md="3">
                        
                    </MDBCol>
                    <MDBCol md="9">
                       
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    )
}

export default Detail;


