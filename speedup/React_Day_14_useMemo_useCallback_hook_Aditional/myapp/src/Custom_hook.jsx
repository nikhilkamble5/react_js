import React, { useState } from 'react'

const Custom_hook = () => {


  //1 custom hook
  const [count,setCount]=useState(0)

  //2 function
  const handler1=()=>{
    setCount(count+5)
  }
 const handler2=()=>{
  setCount(count-1)
 }
  //3
  return {
    handler1,
    handler2,
    count,
  }
}

export default Custom_hook