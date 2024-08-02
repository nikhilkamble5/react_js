import React from 'react'
import D from './D'

const C = (props) => {
  return (
    <>
    {/* <h1>Component C {props.name}</h1> */}
    <D name={props.name}/>
    </>
  )
}

export default C