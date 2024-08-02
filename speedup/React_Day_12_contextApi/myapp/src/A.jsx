import React from 'react'
import B from './B'

const A = ({name}) => {
  // const [name]=props
  return (
    <>
    
    {/* <h1>A component {name}</h1> */}
    <B name={name}/>
    </>
  )
}

export default A

//App>A>B>C>D