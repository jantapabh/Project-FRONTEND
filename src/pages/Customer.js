import React, { useState, useEffect } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Bootstrap react
import { Card } from 'react-bootstrap'

//MDB

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


//Components Based
import customer from '../static/images/customer.png'


const Customer = () => {

    return (
        <div>

            <div style={{ display: 'flex', justifyContent: 'center', margin: 20 }}>
                <MDBRow>
                    <MDBCol md="5">
                        <MDBContainer>
                            <img src={customer} style={{ width: 400, height: 400 }} />
                        </MDBContainer>
                    </MDBCol>
                </MDBRow>
            </div>
        </div>
    )
}

export default Customer;


