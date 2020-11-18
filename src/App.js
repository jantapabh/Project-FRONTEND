import React, { Component, useState } from 'react';
import './App.css';

// Router
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';

//import Components and Pages

import Dashboard from './components/layout/Dashboard'
import Sidebar from './components/Sidebar'

//Pages
import Login from './pages/Login';
import Pricing from './pages/Home';
import MapShow from './pages/MapShow';
import Contact from './pages/Contact';
import Chat from './pages/Chat'
import Main from './pages/Main'
import Customer from './pages/Customer';
import Detail from './pages/Detail';
import About from './pages/About';
import SignUp from './pages/SignUp'
import service from './components/service'


//หน้าแอปส่วนหลักในการทำการ Route และdesof render หน้า



const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={Pricing} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/map" component={MapShow} />
        <Route path="/login" component={Login} />
        <Route path="/main" component={Main} />
        <Route path="/contact" component={Contact} />
        <Route path="/chat" component={Chat} />
        <Route path="/customers" component={Customer} />
        <Route path="/moreDetails" component={Detail} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={SignUp} />
      </BrowserRouter>
    </div>
  )
}


export default App
