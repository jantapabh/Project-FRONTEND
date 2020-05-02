import React, { useState, useEffect } from 'react';
import '../App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

//Bootstrap react
import { Card, } from 'react-bootstrap'

//MDB

import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

//Bulma

import { Button, Level, Heading, } from 'react-bulma-components/dist'

//Components Based

import SidebarProblem from '../components/SidebarProblem'
import ListShow from '../components/ListShow'
import Form from '../components/FormProblem/Form'
import problem from '../static/images/problem.png'

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


