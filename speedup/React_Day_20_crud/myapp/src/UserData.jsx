import React from "react";
import Axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const UserData = () => {
//defined state 
const [data ,setData]=useState([])

  //api calling -get method
  const loadData =async() => {

    try{  
       const result =await  Axios.get("http://localhost:3000/User");
    // console.log(result);
    console.log(result.data);
    setData(result.data)
  }
  catch {
    console.log();
  }
 
  };

  useEffect(() => {
    loadData();
  }, []);

  console.log(data);
  return (
    <>
      <h1 className="bg-dark p-4 my-3 fw-bold text-center text-light">
        User Data
      </h1>

      <table className="table table-striped table-hover w-100 fw-bold text-center table-responsive-sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Skill</th>
          <th>Email</th>
          <th>Mobile</th>

        </tr>
      </thead>

      <tbody>
        {data.map((val,index)=>{
          return(
            <tr key={index}>
            <td>{val.id}</td>
            <td>{val.name}</td>
            <td>{val.skill}</td>
            <td>{val.email}</td>
            <td>{val.mobile}</td>


          </tr>
          )
      
        })}
      </tbody>
      </table>
    </>
  );
};

export default UserData;
