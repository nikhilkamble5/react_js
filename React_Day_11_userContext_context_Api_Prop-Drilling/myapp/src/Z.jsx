import React from "react";
import { useContext } from "react";
//import usecontext hookt

//2 import created context which we export
import { empName, empRole } from "./CrateContext";
const Z = () => {
  //3 called useContext hook and pass icontext while calling
  const empname = useContext(empName);
  const emprole = useContext(empRole);

  return (
    // 3
    <>
      <h1>Z component</h1>
      <h1>Employee name :{empname}</h1>
      <h1>hello Dear -Employee Role: {emprole}</h1>
      
    </>
  );
};

export default Z;
