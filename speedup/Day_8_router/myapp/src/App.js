import React from "react";
import {  BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Navbar";

const App = () => {
  return (
    <>

      <Router>
        <Navbar/>
        <Routes path="/" element={<h1>Home Component</h1>}></Routes>
        <Routes path="/about" element={<h1>About</h1>}></Routes>
        <Routes path="/contact" element={<h1>About</h1>}></Routes>
        <Routes path="/service" element={<h1>About</h1>}></Routes>

      </Router>
      
    </>
  );
};

export default App;
