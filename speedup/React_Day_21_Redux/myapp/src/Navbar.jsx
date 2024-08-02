import React from 'react'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const amt=useSelector((state)=>state.amount)
  return (
    <>
    
    <nav className=' navbar navbar-expand-lg navbar-dark bg-dark fw-bold text-light'>

    <a href="" className='navbar-brand'> <h2 className='text-warning'>Redux</h2></a>

    <button className='btn btn-danger px-4 fw-bold m-auto mx-3'>Balance -{amt}</button>
    </nav>
    </>
  )
}

export default Navbar