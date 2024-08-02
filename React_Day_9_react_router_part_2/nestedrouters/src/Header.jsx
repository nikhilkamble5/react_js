import React from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "./Navbar";
import Footer from "./Footer";
import Navbar from "./component/Navbar";

const Header = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer/>
    </>
  );
};

export default Header;
