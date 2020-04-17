import React, { Component } from 'react';
import './App.css';

// Router
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';

//import Components and Pages
import Map from './pages/MapShow'
import Chart from './components/Chart'
import Dashboard from './components/Dashboard'
import Login from './pages/Login';
import Sidebar from './components/Sidebar'
import Pricing from './pages/Pricing';
import MapShow from './pages/MapShow';
import Contact from './pages/Contact';
import Chat from './pages/Chat'
import Main from './pages/Main'

//หน้าแอปส่วนหลักในการทำการ Route และdesof render หน้า



const App = () => {

    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Pricing}/>
          <Route path="/dashboad" component={Dashboard} />
          <Route path="/map" component={MapShow} />
          <Route path="/login" component={Login} />
          <Route path="/main" component={Main} />
          <Route path="/contact" component={Contact} />
          <Route path="/chat" component={Chat} />
        </BrowserRouter>
      </div>
    )
  }


export default App
