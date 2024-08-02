import React from 'react'
import { useRef } from 'react'


const UseRef = () => {
 const data =useRef(null);

 const getData=()=>{
  // alert('');
  // console.log(data);
  // console.log(data.current);
  console.log(data.current.value);
  data.current.style.backgroundColor="orange";
 }
  return (
    <>
    <label htmlFor="">Enter Your name:</label>
    <input type="text" placeholder='enter ur name' name='' id='name'  ref={data} onChange={()=>getData()}/>
    </>
  )
}

export default UseRef