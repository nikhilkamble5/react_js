import React, { useDebugValue, useDeferredValue, useImperativeHandle, useState } from 'react'

const Custom_hhok = () => {

  const [count,setCount]=useState(0)

  //defined function ie hook


  const countHandler=()=>{
    setCount(count+5)
  }

  const countHandle2=()=>{
    setCount(count-1)

  }

  return {

    countHandler,
    count,
    countHandle2,
  }
   
  
}

export default Custom_hhok


//aditional Hook

// userID()=generate uniq id 

// useDebugValue()
// useDeferredValue()
// useImperativeHandle()
// useInsertionEffect()