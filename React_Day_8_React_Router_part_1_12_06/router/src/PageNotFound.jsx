import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <>

<h1 className=' fw-bold my-4 text-center'>page Not Found <span className='text-danger'>404</span></h1>
    <NavLink to='/' className='nav-link text-center   text-primary'>Go To home Page</NavLink>
    </>
  )
}

export default PageNotFound