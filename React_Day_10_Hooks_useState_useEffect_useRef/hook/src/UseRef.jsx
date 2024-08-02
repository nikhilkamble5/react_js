import React, { useRef } from 'react'

const UseRef = () => {

  

  //useref used to to handle mutable object/data
  //eg to fetch input field
  //avoid rendiering cause

const data= useRef(null)

//Getname
const Getname=()=>{
  //
  // console.log(data.current);
  //value
  console.log(data.current.value);

  //style
  data.current.style.backgroundColor='orange'

  //set value
  data.current.value='nishi'
}
  return (
    <>
    
    <h1>Use Ref in functional component</h1>
      <input type="text" placeholder='enter ur name' ref={data} onChange={()=>Getname()} />
    </>
  )
}

export default UseRef