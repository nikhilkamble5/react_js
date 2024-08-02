import React, { useState } from "react";
import { useReducer } from "react";
const App = () => {
  const initialstate = { count: 0 };

  //syntax
  // const[state,setState]=useState('initialstate')

  //we are passing data toreducer which handles all logical part through dispatch

  //3
  const reducer = (state,action) => {

    //all logical part handle
    // alert(state.count)
    // alert(action.type)

    switch(action.type){

      case'INC':return {count:state.count+1}
        
      case 'DEC':        return {count:state.count-1}
      default:return state.count

    }

  };
  //2
  const [state, dispatch] = useReducer(reducer,  initialstate );

  return (
    <>
      <h1>Use To handle Complex State logic</h1>
      <h1>Initial state : {state.count}</h1>
      <button onClick={()=>dispatch({type:'INC'})}>Update Count</button>
      <button onClick={()=>dispatch({type:'DEC'})}>Reduce COunt</button>
    </>
  );
};

export default App;
