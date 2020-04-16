import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './pages/MapShow'
import Chart from './components/Chart'
import Dashboard from './components/Dashboard'
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import Sidebar from './components/Sidebar'
import Pricing from './pages/Pricing';

class App extends Component {

  render() {

    return (
      <div>
        <Sidebar />
        <Pricing />
      </div>
    )
  }


}

export default App
