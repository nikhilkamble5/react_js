import React, { useReducer } from 'react'

const App = () => {

//3 
    const reducer=(state,action)=>{
      // console.log(state.count);
      // alert(action.type)

      switch(action.type){
        case 'INC':
          return {count: state.count+1}
          case 'DEC':
            return {count: state.count-1}
            default:
              return state.count
            

      }
    }
  //2 

  var initialState={count:0}
  //1
   const [state,dispatch] =useReducer(reducer,initialState)
  return (
    <>
    <h1>Use Reducer Hook</h1>

   <center>
   <h1>Initial Count : {state.count} </h1>

<button className='btn btn-danger mx-4 px-4 fw-bold' onClick={()=>{dispatch({type:'INC'})}}>INc</button>
    {state.count}
<button className='btn btn-danger mx-4 px-4 fw-bold' onClick={()=>{dispatch({type:'DEC'})}}>Dec</button>
   </center>
    </>
  )
}

export default App