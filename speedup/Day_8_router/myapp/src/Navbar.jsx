import React from 'react'

const Navbar = () => {
  return (
    <>
    
    <nav className='navbar navbar-expand-lg navbar-light bg-dark' >
      <a href="#" className='navbar-brand'>
        <h2 className='text-warning fw-bold'>React Router</h2>
      </a>
      <ul className='navbar-nav m-auto'>
        <li className='nav-item'><a href="/" className='nav-link'>Home</a></li>
        <li className='nav-item'><a href="/about" className='nav-link'>About</a></li>
        <li className='nav-item'><a href="/contact" className='nav-link'>About</a></li>
        <li className='nav-item'><a href="/service" className='nav-link'>About</a></li>


      </ul>
    </nav>
    </>
  )
}

export default Navbar