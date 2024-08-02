import React from "react";

const Demo1 = () => {
  alert("event s called in functional component");
};

const Demo2 = () => {
  alert("Demo2 Called");
};
const App2 = (props) => {
  console.log(props);

  return (
    <>
      {/*  */}
      <h1>Welcome to the statless functional component</h1>
      <button onClick={Demo1}> clcik here</button>
      {/* Arrow Functional handler */}
      <button onClick={() => Demo2()}>Arrow Functional handler</button>
      <h1>hello ur age is {props.age}</h1>/{" "}
    </>
  );
};

export default App2;
