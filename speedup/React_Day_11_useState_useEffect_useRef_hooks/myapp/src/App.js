import React, { useEffect, useState } from "react";

// const [initialState,updatedState]=useState();
//const [data,setData]=useState([])
// const [data ,setData]=useState({id:1,name:'nikhil,skill:'html})
const App = () => {
  const [name, setName] = useState("Prathmesh");
  const [count, setCount] = useState(0);
  const UpdateState = () => {
    setName("nikhil");
  };

  const INC = () => {
    setCount(count + 1);
  };

  //use Effect

  // useEffect(()=>{
  //   console.log('useEffect hhol Called');
  // })

  //[] -pass a empty dependancy to execute only once
  // useEffect(()=>{
  //   console.log('useEffect hhol Called');
  // },[])

  // useEffect(()=>{
  //   alert('hello useeffect called')
  // },[name])

  const [color, setColor] = useState("orange");

  useEffect(() => {
    setTimeout(() => {
      setColor("navy");
    }, 3000);

    setTimeout(() => {
      setColor("pink");
    }, 2000);
  }, [color]);
  return (
    <>
      <h1>Hello Ur name is {name}</h1>
      <button onClick={() => UpdateState()}>Update State</button>
      <h1>Hello you Visitited {count} times</h1>
      <button onClick={() => INC()}> update Count</button>

      <button onClick={() => setCount(count - 1)}>Reduce Count</button>
      <br />
      <hr />
      <h1 style={{ color: color }}>
        Hello modern react js hook in funtional compoentn
      </h1>
      <button></button>
    </>
  );
};

export default App;
