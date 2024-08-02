import React from 'react'
import { useContext } from 'react'
import { name,skill } from './CreateCotext'
const Z = () => { 

  //3 
  var userName=useContext(name);
  var useSkill=useContext(skill)
  return (
    <>
    <h1>z component</h1>
    <h1>hello ur name is {userName}</h1>
    <h1>hello ur name is {useSkill}</h1>

    </>
  )
}

export default Z