import React from 'react'
import {useDispatch, useSelector} from "react-redux"
import { decremment, incAmount, incremment } from './couterSlice'
function App ()  {

  const coutSelector= useSelector((state)=>state.count)

  const dispatch =useDispatch()
  return (
    <>
   
      <div>
        <h1>{coutSelector}</h1>
        <button style={{border: "2px solid red"} } onClick={()=>dispatch(incremment())}>plus </button>

        <button style={{border: "2px solid red"} } onClick={()=>dispatch(decremment())}>Minus me</button>

        <button style={{border: "2px solid red"} } onClick={()=>dispatch(incAmount(5))}>Increment by amount </button>
      </div>

    </>
  )
}

export default App