import React, { useMemo, useState } from 'react'

const UseMemo = () => {
  const [item,setitem]=useState(0)
  const [count ,setCOunt]=useState(1)

  //Another functio
  // const Demo1=()=>{
  //   console.log('Demo 1');
  // }

  // const Demo2=()=>{
  //   console.log('Demo 2');
  // }

  const Demo3=useMemo(()=>{
    console.log('useMemo Called');
    return count+5;
  },[count])
  return (
    <>
    <h1>use memo use callback function in react js</h1>

    <h1>initial item: {item}</h1>
    <h1>initial count: {count}</h1>
      <button onClick={()=>setitem(item+1)}>Update item {item}</button>
      <button onClick={()=>setCOunt(count+1)} >Update count {count}</button>
        {/* <h1>{Demo1()}</h1>
        <h2>{Demo2()}</h2> */}
        <h1>{Demo3}</h1>


        const User1=[{id:1,name:'',skill:'',Role:''}]
        const User2=[{id:1,name:'',skill:'',Role:''}]
        const User3=[{id:1,name:'',skill:'',Role:''}]

            const [data,setData]=useState(User1)
    </>
  )
}

export default UseMemo