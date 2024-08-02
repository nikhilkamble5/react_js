import React from "react";
import { NavLink } from "react-router-dom";
import "./Navlink.css";
const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <a href="/" className="navbar-brand">
          <h2 className="text-warning fw-bold">React Router</h2>
        </a>

        <button
          className="navbar-toggler"
          data-bs-target="#nav1"
          data-bs-toggle="collapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="nav1">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <NavLink to="/" className="nav-link "> Home</NavLink></li>
            <li className="nav-item">
              <NavLink to="/about" className="nav-link "> About</NavLink> </li>
           <li className="nav-item">
              <NavLink to="/contact/sharad/aditya" className="nav-link ">  Contact Us </NavLink></li>
              <li className="nav-item">
              <NavLink to="/service" className="nav-link ">  Services  </NavLink>   </li>
              </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
