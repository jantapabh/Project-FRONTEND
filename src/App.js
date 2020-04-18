import React, { Component } from 'react';
import './App.css';

// Router
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';

//import Components and Pages

import Chart from './components/Chart'
import Dashboard from './components/Dashboard'
import Sidebar from './components/Sidebar'

//Pages

import Map from './pages/MapShow'
import Login from './pages/Login';
import Pricing from './pages/Pricing';
import MapShow from './pages/MapShow';
import Contact from './pages/Contact';
import Chat from './pages/Chat'
import Main from './pages/Main'
import Customer from './pages/Customer';

//หน้าแอปส่วนหลักในการทำการ Route และdesof render หน้า



const App = () => {

    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Pricing}/>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/map" component={MapShow} />
          <Route path="/login" component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/contact" component={Contact} />
          <Route path="/chat" component={Chat} />
          <Route path="/customers" component={Customer} />
          <Route path="/moreDetails" component={Detail} />
        </BrowserRouter>
      </div>
    )
  }


export default App
