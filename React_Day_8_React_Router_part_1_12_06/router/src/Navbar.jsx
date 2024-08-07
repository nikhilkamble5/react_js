// import React from 'react'
// import { NavLink } from 'react-router-dom'
// import './Navbar.css'
// const Navbar = () => {
//   return (
//     <>
//     {/* replace with anchore tag */}
//     {/* wrapper to navigate multiple component */}
//     <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light fw-bold">

//       <a href="" className='navbar-brand'><h2 className='text-warning'>React Router</h2></a>

//       <ul className='navbar-nav m-auto'>
//         <li className='nav-item mx-4'><NavLink to='/' className='nav-link'>Home</NavLink></li>
//         <li className='nav-item mx-4'><NavLink to='/about' className='nav-link'>About Us</NavLink></li>
//         <li className='nav-item mx-4' > <NavLink to='/contact/Rushi/Abhijit' className='nav-link'>Contact Us</NavLink></li>
//         <li className='nav-item mx-4' > <NavLink to='/service' className='nav-link'>Service</NavLink></li>
//         <li className='nav-item mx-4' > <NavLink to='/faq' className='nav-link'>Faq Us</NavLink></li>


        


//       </ul>
//     </nav>
    
//     </>
//   )
// }

// export default Navbar

// Navbar.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      {/* Replace with anchor tag */}
      {/* Wrapper to navigate multiple components */}
      <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light fw-bold">
        <a href="" className='navbar-brand'><h2 className='text-warning'>React Router</h2></a>
        <ul className='navbar-nav m-auto'>
          <li className='nav-item mx-4'><NavLink to='/' className='nav-link'>Home</NavLink></li>
          <li className='nav-item mx-4'><NavLink to='/about' className='nav-link'>About Us</NavLink></li>
          <li className='nav-item mx-4'><NavLink to='/contact/Rushi/Abhijit' className='nav-link'>Contact Us</NavLink></li>
          <li className='nav-item mx-4'><NavLink to='/service' className='nav-link'>Service</NavLink></li>
          <li className='nav-item mx-4'><NavLink to='/faq' className='nav-link'>Faq Us</NavLink></li>
          <li className='nav-item mx-4'><NavLink to='/simple-interest-calculator' className='nav-link'>Simple Interest Calculator</NavLink></li> {/* Add new nav link */}
          <li className='nav-item mx-4'><NavLink to='/bmi' className='nav-link'>bmi</NavLink></li> {/* Add new nav link */}

        </ul>
      </nav>
    </>
  );
};

export default Navbar;
