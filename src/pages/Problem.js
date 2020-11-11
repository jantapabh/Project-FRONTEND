import React, { useState, useEffect } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Bootstrap react
import { Card, } from 'react-bootstrap'

//MDB
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


const Problem = () => {

    return (
        <div>
            <div>
                <SidebarProblem />
            </div>
            <div>
                
                        <Form />
              
            </div>
        </div>
    )
}

export default Problem;


