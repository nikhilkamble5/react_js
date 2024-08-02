import React, { useMemo, useState } from "react";

const App = () => {
  const [data, setdata] = useState(0);
  const [count, setCount] = useState(1);

  //another function
  // const demo=()=>{
  //   console.log('function caleld');
  // }

  const demo=useMemo(()=>{
    console.log('useMemo Called');
    return data+5
  },[data])
  return (
    <>
      {/* usememo -
    used when performance optiization
    only call when we required
    avoid multiple function callback
     */}
      <h1>usememo ANd useCallback Hook in React </h1>
      <h1>initial count {count}</h1>
      <h1>initila data {data}</h1>

      <button onClick={()=>setdata(data+5)}>update count</button>
      <button onClick={()=>setCount(count+1)}>update data</button>
     <h1>{demo}</h1>
    </>
  );
};

export default App;
