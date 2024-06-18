import React from 'react'
//1 step
import { useNavigate } from 'react-router-dom'
  import { useParams } from 'react-router-dom';
const Contact = () => {
  //2 called in functional component
    const nav=useNavigate();
  const GoHome=()=>{
    // alert('')
    nav('/')
  }
  //acees data prams //1
  const data =useParams();
  console.log(data);

  //option 2

  const {name,name2}=useParams();
  return (
    <>


<h1 className='my-3 text-center'>Contact Page</h1>

<center>
<button className='btn btn-danger px-4 mx-4' onClick={()=>GoHome()}>Home Page</button>
<button className='btn btn-primary px-4 mx-4' onClick={()=>nav('/about')}>About Page</button>
</center>
      <hr />
      <h1>Name of url:{data.name}</h1>
      <h1>Name of url:{data.name2}</h1>

      <h1>Name of url:{name}</h1>
      <h1>Name of url:{name2}</h1>
    </>
  )
}

export default Contact