import React from "react";

//1 import custom hook
import Custom_hhok from "./Custom_hhok";
const App = () => {


  
  //2
  const data = Custom_hhok();
  //we can used same hook multiple time
  const data2 = Custom_hhok();


  //3 we can define multiple hook
  console.log(data);
  return (
    <>
      <h1>Custom React hook And Adition</h1>
      <h1>Count: {data.count}</h1>

      <button onClick={() => data.countHandler()}>Update Count</button>

      <button onClick={()=>data.countHandle2()}>Reduce COunt</button>
      <hr />

      <h1>Count : {data2.count}</h1>
      <button onClick={() => data2.countHandler()}>Update Count</button>
    </>
  );
};

export default App;
