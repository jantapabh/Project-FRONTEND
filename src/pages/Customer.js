import React, { useState, useEffect } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Bootstrap react
import { Card } from 'react-bootstrap'

//MDB

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


//Components Based


import SidebarCustomer from '../components/SidebarCustomer';


const Customer = () => {

    return (
        <div>
            <div>
                <SidebarCustomer/>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Customer;


