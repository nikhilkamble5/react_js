import React from 'react'
import C from './C'

const B = (props) => {
  return (
    <>
    
    {/* <h1>B COmponent- {props.name}</h1> */}
    <C name={props.name}/>
    </>
  )
}

export default B