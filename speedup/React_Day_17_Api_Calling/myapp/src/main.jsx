import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import App2 from './App2.jsx'
import React_Form from './React_Form.jsx'
import { Formik } from 'formik'
import Basic from './Formik.jsx'
import Formik2 from './Formik2.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <App2/> */}

    {/* React Form handeling */}
      {/* <React_Form/> */}
      <hr/>
      {/* <Basic/> */}
      <Formik2/>
  </React.StrictMode>,
)
