import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const nav= useNavigate();

  return (
    <>
      <h1 className="text-center my-4 text-primary">Select Calculator</h1>
      <center>
   <button className='btn btn-danger mx-4'onClick={()=>nav('/bmi')}>BMI Calculator</button>
   <button className='btn btn-danger'onClick={()=>nav('/simplecalculator')}>Simple Calculator</button>


{/* <button className='btn btn-secondary mx-3' onClick={()=>GoNextForward()}>Go back Or Forward</button> */}
   </center>
    </>
  );
};

export default Home;
