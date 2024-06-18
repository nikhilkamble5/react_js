import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const About = () => {
   const nav= useNavigate();

  const  GoNextForward=()=>{
      // nav(-1)
      nav(1)
  }

  //useHistory - in verison 5
  //useLocatio -location object in js

  const loc=useLocation()
  //conditional redndering

  // if(loc.pathname=='/about')
  //   {
  //     // loc.redirect('/')
  //     // nav('/')
  //   }
  return (
    <>

<h1 className='my-3 text-center'>About Us Page</h1>

   <center>
   <button className='btn btn-danger'onClick={()=>nav('/contact')}>Contact us</button>

<button className='btn btn-secondary mx-3' onClick={()=>GoNextForward()}>Go back Or Forward</button>
   </center>
    </> 
  )
}

export default About