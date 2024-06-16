import React from "react";
const App2=()=>{
  const Demo1=()=>{
    alert('event call')
  }
  const Demo2=()=>{
    alert('Demo2  call')
  }

  return(
    <>
    
    <h1> Welcome to the state less functional component</h1>
    <button onClick={Demo1}>Click here</button>


    {/* Arrow func */}
    <button onClick={()=>Demo2()}>Arrow Function handler</button>
    </>
  )
}

export default App2