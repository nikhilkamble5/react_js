import React from 'react'
import B from './B'
  //spread syntaxt to acess data
const A = ({EmpName}) => {
  // const {EmpName}=props;
  return (
    <>
    {/* <h1>A component</h1> */}
    {/* <h1>Employee name: {EmpName}</h1> */}

    

    <B EmpName={EmpName}/>

    {/* //solution context api
    // useContexthook */}
    </>
  )
}

export default A