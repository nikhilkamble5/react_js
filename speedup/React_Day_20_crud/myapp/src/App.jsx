import React from "react";
//1
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserData from "./UserData";
import Home from "./Home";
import Navbar from "./Navbar";
const App = () => {
  return (
    <>
      {/* 2  */}
      <Router> 
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userdata" element={<UserData />} />

          {/* fall back routing  */}
          <Route path="/" element={<Home/>}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
