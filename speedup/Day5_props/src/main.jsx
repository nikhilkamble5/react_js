import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import App2 from './App2.jsx';
import App3 from './App3.jsx';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <App2 skill="reactjs" position={5} role={{role1:'mern'}} />
    <br />
    <hr />  
    <App3 name="nikhil"/>

  </React.StrictMode>,
)
