import React, { useState } from "react";
import { createContext } from "react";
import Z from "./Z";

//2 defined context into create
const empRole = createContext();
const empName = createContext();
const CrateContext = () => {
  const [name, setname] = useState("nikhil");

  return (
    <>
      <h1>Context APi in react</h1>
      {/* passing a data to consumer through provider property  which we created context */}

      <empRole.Provider value={"Front End Devloper"}>
        <empName.Provider value={name}>
          <Z />
        </empName.Provider>
      </empRole.Provider>
    </>
  );
};

export default CrateContext;

//4 export created context

export { empRole, empName };
{
  /* 1st we need to  create context 
    step - import createcontexr() function to create contexrt

    // 2 Declare Varible and defined context and passed into cratecontext() function

    3 passing a data through consumer

    /4 export created context

    //5 uded that context


    //1import usecontext hookt
      2 import create context that which we export
        //3 called useContext hook and pass icontext while calling 

        used
    */
}
