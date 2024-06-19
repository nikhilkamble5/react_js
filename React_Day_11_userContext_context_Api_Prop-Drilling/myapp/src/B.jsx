import React from "react";
import C from "./C";

const B = (props) => {
  return (
    <>
      {/* <h1> B component</h1> */}
      {/* <h2>{props.EmpName}</h2> */}
      <hr />
      <C EmpName={props.EmpName} />
    </>
  );
};

export default B;
