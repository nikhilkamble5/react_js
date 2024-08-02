import React from "react";
function App3(props) {
  // const Demo1 = () => {
  //   alert("hello event in funtional componet");
  // };
  // const Demo2=()=>{
  //   alert('function cllling in arrow function')
  // }
  return (
    <>
      <h1>Wlcome to functional component</h1>
      <h1>Props Data {props.name}</h1>
      {/* <button onClick={Demo1}>Clcik here 1</button>
      <button onClick={()=>alert('d')}>click here 2</button>
      <button onClick={()=>Demo2()}>clcik here 3</button> */}
    </>
  );
}

export default App3;
