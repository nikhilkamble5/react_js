import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark text-light fw-bold">
      <a href="/" className="navbar-brand">
        <h2 className="text-warning">React Router</h2>
      </a>
      <ul className="navbar-nav m-auto">
        <li className="nav-item mx-4">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink to="/about" className="nav-link">
            About Us
          </NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink to="/contact/Rushi/Abhijit" className="nav-link">
            Contact Us
          </NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink to="/service" className="nav-link">
            Service
          </NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink to="/faq" className="nav-link">
            Faq Us
          </NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink to="/financial" className="nav-link">
            Financial Calculators
          </NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink to="/health" className="nav-link">
            Health Calculators
          </NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink to="/conversion" className="nav-link">
            Conversion Calculators
          </NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink to="/geometry" className="nav-link">
            Geometry Calculators
          </NavLink>
        </li>
        <li className="nav-item mx-4">
          <NavLink to="/math" className="nav-link">
            Math Calculators
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
