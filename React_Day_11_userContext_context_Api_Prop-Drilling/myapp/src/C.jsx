import React from 'react'
import D from './D'

const C = (props) => {
  return (
    <>

{/* <h1> C component </h1> */}
{/* <h2>{props.EmpName}</h2> */}
{/* <hr /> */}
    {/* //passing data to d component  */}
    <D EmpName={props.EmpName}/>
    </>
  )
}

export default C