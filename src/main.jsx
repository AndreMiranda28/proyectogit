import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
//---------COMPONENTES--------------
import App from './App'
import Commitsgit from './Components/Commitsgit'
//---------PROPIEDADES-------------------
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from 'react-router-dom';


import { Provider } from 'react-redux'; 

import store from './Redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

  <Router>
    <App></App>
  </Router> 
  </Provider>

)