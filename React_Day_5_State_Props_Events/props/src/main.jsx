import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import App2 from './App2.jsx'


const obj={
        mobile:'987654321',
        email:'abc@gmail.com',
}
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* pass data from one component to another component ie dynamiclly pass data */}

   

    <App id={1234}
      userName="pratik"
      iseligible={true}
      Obj={{}}
      Obj2={obj}

    />
    <App2 age={25}/>
  </React.StrictMode>,
)
