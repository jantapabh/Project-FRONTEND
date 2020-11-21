
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Row, Col } from 'antd';
import LoginBar from '../LoginBar'
import styled from 'styled-components';
import NavigationBar from '../NavigationBar'
import NavBar from '../NavBar'
import ShowMap from './ShowMap';
import './map.css'
import MapTwo from '../Map/MapTwo';
import MapShow from 'src/pages/MapShow';
import 'bootstrap/dist/css/bootstrap.min.css';
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;


//แสดงส่วนการเรียกใช้งาน NavBar

//หน้าหลลักแสดงในส่วนของหลัก Login
const Dashboard = () => {

  return (
    <div>
      <div><NavigationBar /></div>
      <div><NavBar /></div>
      <div>
        
        </div>
    </div>
  )
}

export default Dashboard;

