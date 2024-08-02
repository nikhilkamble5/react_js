import React from "react";
import Home from "../component/Home";
import User from "../component/User";
import About from "../component/About";
import { Route, Routes } from "react-router-dom";
import UserDetail from "../component/UserDetail";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user" element={<User />} >
        
      <Route path="/user/:name" element={<UserDetail />} />
        </Route>

      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default Routing;
