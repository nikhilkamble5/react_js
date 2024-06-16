import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Sum,empName } from './App.jsx'
import App2 from './App2.jsx'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <h1>Total sum is:{Sum(20,30)}</h1>
    <h1>hello Dear your Name is {empName}</h1>
    <hr />

    {/* //class Component */}
    <App2/>
  </React.StrictMode>,
)
