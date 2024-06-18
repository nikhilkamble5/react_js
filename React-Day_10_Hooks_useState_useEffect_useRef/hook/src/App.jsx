import React, { useState ,useEffect} from 'react'

const App = () => {

  //destructuring syntax

  // const [initialState,updateState]=useState (initialState)
  // const [initialState,updateState]=useState (0//" true/{key:value}/[]")

const [name,setname]=useState('nikhil')
const [count,setCount]=useState(0)

const [color,setColor]=useState('orange')
const UpdateName=()=>{
  //state update

  setname('Rishi')
}

const UpdateCount=()=>{
  setCount(count+1)
}

//called on each and every rendering
// useEffect(()=>{
//   alert('useEffect call')
// })

//pass array emoty dependancy
//useffect called only once at onitial rendering


      // useEffect(()=>{
      //   alert('useEffect call')
      // },[])

      //side effect apply only on specific state
      // useEffect(()=>{
      //   alert('useEffect call')
      // },[name])


      //sidde effect on color state

      useEffect(()=>{
        setTimeout(() => {
            setColor('magenta')
        }, 3000);


        setTimeout(() => {
            setColor('yellow')
        }, 5000);
      },[])


  return (
    <>
    <h1>React common basic hook in functional component</h1>

    <h1 style={{color:color}}>hello ur name is : {name}</h1>
    <button onClick={()=>setColor('navy')}>update color</button>
    <h1>Hello you visited count time {count}</h1>
    {/* use state
    hold the application and  component state */}

    <button onClick={()=>UpdateName()}>Updtae name</button>

    <button onClick={()=>UpdateCount()}>Update COunt</button>
    <button onClick={()=>setCount(count-1)}>Reduce COunt</button>
{/* ********************************************* */}

{/* useEffecy */}


  
    </>


  )
}

export default App