import React from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <center>
        <h1 className="text-center my-4 fw-bold">
          Page Not Found - <span className="text-danger">404</span>
        </h1>
        <NavLink to="/"><h4>Go TO Home Page</h4></NavLink>

      </center>
    </>
  );
};

export default PageNotFound;
