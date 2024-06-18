import React from 'react'
//1 step
import { useNavigate } from 'react-router-dom'

const Contact = () => {
  //2 called in functional component
    const nav=useNavigate();
  const GoHome=()=>{
    // alert('')
    nav('/')
  }
  return (
    <>


<h1 className='my-3 text-center'>Contact Page</h1>

<center>
<button className='btn btn-danger px-4 mx-4' onClick={()=>GoHome()}>Home Page</button>
<button className='btn btn-primary px-4 mx-4' onClick={()=>nav('/about')}>About Page</button>
</center>

    </>
  )
}

export default Contact