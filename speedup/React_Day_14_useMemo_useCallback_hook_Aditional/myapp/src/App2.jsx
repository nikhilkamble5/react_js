import React, { useId } from 'react'
//1

import Custom_hook from './Custom_hook'
const App2 = () => {

//used to generate uniq id
const id=useId();
console.log(id);
  //************************* */
  //2
  const data=Custom_hook()
  const data2=Custom_hook()


  //const handler 

  return (
    <>
      
      <h1>Custom Hook</h1>

      <h1>initial count : {data.count}</h1>
      <button onClick={()=>data.handler1()}>update count</button>
      <hr />
      
      <h1>Reused : {data2.count}</h1>
      <button onClick={()=>data2.handler1()}>update count</button>


      <button onClick={()=>data2.handler2()}>Reduce called</button>
    </>
  )
}

export default App2