import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Router, Route, Link } from 'react-router-dom'
import { browserHistory } from 'react-router'

//Leaflet

import 'leaflet/dist/leaflet.css'

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.querySelector('#root')
)

serviceWorker.unregister();
