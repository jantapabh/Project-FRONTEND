import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Map from './pages/MapShow'
import Chart from './components/Chart'
import Dashboard from './components/Dashboard'
import MainPage from './pages/MainPage';


class App extends Component{

  render(){

    return(
      <div>
     <MainPage />
      </div>
    )
  }


}

export default App
