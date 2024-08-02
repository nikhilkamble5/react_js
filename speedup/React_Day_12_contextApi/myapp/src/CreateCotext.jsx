import React from 'react'
import { createContext } from 'react'
import Z from './Z';

//2 defined and create context and call

var name=createContext();
var skill=createContext();
const CreateCotext = () => {
  return (
    <>
    {/* 3 pass data to component through provider */}
    <name.Provider vallue='pratik'>
   
<skill.Provider value='mern Stack'>
<Z/>
</skill.Provider>
    </name.Provider>
    <h1>CreateContext Api  working  </h1>
    </>
  )
}

export default CreateCotext

//4 export create context

export {name,skill}