import React, { Component } from 'react';
import './App.css';

// Router
import { BrowserRouter, Route, Link, Router, Redirect } from 'react-router-dom';
import Map from './pages/MapShow'
import Chart from './components/Chart'
import Dashboard from './components/Dashboard'
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Sidebar from './components/Sidebar'
import Pricing from './pages/Pricing';
import MapShow from './pages/MapShow';

class App extends Component {

  render() {

    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={Pricing}/>
          <Route path="/dashboad" component={Dashboard} />
          <Route path="/map" component={MapShow} />
          <Route path="/login" component={Login} />
          <Route path="/main" component={MainPage} />
        </BrowserRouter>
      </div>
    )
  }


}

export default App
