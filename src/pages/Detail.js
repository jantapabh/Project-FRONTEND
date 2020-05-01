import React, { useState, useEffect } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Bootstrap react
import { Card } from 'react-bootstrap'

//MDB

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


//Components Based


import SidebarCustomer from '../components/SidebarCustomer';
import Intro from '../components/Intro';


const Detail = () => {

    return (
        <div>
            <div>
                <SidebarCustomer/>
            </div>
            <div>
               <Intro />
            </div>
        </div>
    )
}

export default Detail;


