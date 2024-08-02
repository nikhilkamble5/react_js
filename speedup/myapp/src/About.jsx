import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const nav= useNavigate();
  const GoBack=()=>{
    nav(-1)
  }
  return (
    <>
      <h1 className="text-center my-4 fw-bold">About Page Component</h1>
      {/* Additional content for the About page */}

      <button className="btn btn-danger" onClick={()=>nav('/contact')}>Contact Us</button>

      <button className="btn btn-info fw-bold mx-3 px-4 " onClick={()=>GoBack()}>Go Back</button>
      <button className="btn btn-dark fw-bold mx-3 px-4 " onClick={()=>nav(1)}>Go Forward</button>
    </> 
  );
};

export default About;
