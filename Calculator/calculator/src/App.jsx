// import React, { useState } from 'react'

// const App = () => {
//   const [number,setNumber]=useState(0)
//   const [number2,setNumber2]=useState(0)
// const [total,setTotal]=useState(number+number2)

// const handleNumberChange =(e)=>{
//   setNumber(+e.target.value)
// }

// const handleNumberChange2 =(e)=>{
//   setNumber(+e.target.value)
// }

// const handleAdd=()=>{

//   const sum=number+number2
//   setTotal(sum)
// }

// const handleSub=()=>{
//   const sub=number-number2
//   setTotal(sub)
// }
//   return (
//     <>
//     <h1>Add 2 number</h1>
//     <div className="input-number">
//       <input type="number"  placeholder='0' onChange={handleNumberChange }/>
//       <input type="number"  placeholder='0' onChange={handleNumberChange2 }/>

//     </div>
//     <button onClick={handleAdd}>Add</button>
//     <button onClick={handleSub}>Add</button>
//     <button onClick={handleDiv}>Add</button>
//     <button onClick={handleMul}>Add</button>

//     <p>Total is {total}</p>
//     </>
//   )
// }

// import React, { useState } from "react"; // Importing React and useState hook from React library

// const App = () => {
//   const [number, setNumber] = useState(0); // State for the first number
//   const [number2, setNumber2] = useState(0); // State for the second number
//   const [total, setTotal] = useState(0); // State for the total sum, initialized to 0

//   // Event handler for the first input field
//   const handleNumberChange = (e) => {
//     const num = +e.target.value; // Convert input value to number
//     setNumber(num); // Update state with the parsed number
//     // setTotal(num + number2); // Update total state with the sum of num and number2
//   };

//   const handleNumberChange2 = (e) => {
//     const num = +e.target.value; // Convert input value to number
//     setNumber2(num); // Update state with the parsed number
//     // setTotal(number + num); // Update total state with the sum of number and num
//   };

//   // Event handler for the addition button
//   const handleAdd = () => {
//     const sum = number + number2; // Calculate the sum of number and number2
//     setTotal(sum); // Update total state with the sum
//   };

//   const handleSub = () => {
//     const sub = number - number2; // Calculate the difference of number and number2
//     setTotal(sub);
//   };

//   const handleDiv = () => {
//     const div = number / number2;
//     setTotal(div);
//   };

//   const handleMul = () => {
//     const mul = number * number2;
//     setTotal(mul);
//   };

//   return (
//     <>
//       <h1>Add 2 numbers</h1>
//       <div className="input-number">
//         <input type="number" placeholder="0" onChange={handleNumberChange} />{" "}
//         <input type="number" placeholder="0" onChange={handleNumberChange2} />{" "}
//       </div>
//       <button className="btn btn-success mr-2" onClick={handleAdd}>
//         Add
//       </button>{" "}
//       <button className="btn btn-danger mr-2" onClick={handleSub}>
//         Subtract
//       </button>{" "}
//       <button className="btn btn-primary mr-3" onClick={handleDiv}>
//         Div
//       </button>
//       <button className="btn btn-warning mr-2" onClick={handleMul}>
//         Mul
//       </button>
//       <p>Total is {total}</p>
//     </>
//   );
// };

// export default App; // Export the App component as default

import React, { useState } from "react";

const App = () => {
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(0);

  const handleNumberChange = (e) => {
    const num = +e.target.value;
    setNumber(num);
  };

  const handleNumberChange2 = (e) => {
    const num = +e.target.value;
    setNumber2(num);
  };

  const handleAdd = () => {
    const sum = number + number2;
    setTotal(sum);
  };

  const handleSub = () => {
    const sub = number - number2;
    setTotal(sub);
  };

  const handleDiv = () => {
    const div = number / number2;
    setTotal(div);
  };

  const handleMul = () => {
    const mul = number * number2;
    setTotal(mul);
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center">Add 2 numbers</h1>
          <div className="input-group mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Enter number 1"
              onChange={handleNumberChange}
            />
            <input
              type="number"
              className="form-control"
              placeholder="Enter number 2"
              onChange={handleNumberChange2}
            />
          </div>
          <div className="mb-3 d-flex justify-content-center">
            <button className="btn btn-primary mr-2" onClick={handleAdd}>
              Add
            </button>
            <button className="btn btn-danger mr-2" onClick={handleSub}>
              Subtract
            </button>
            <button className="btn btn-success mr-2" onClick={handleDiv}>
              Divide
            </button>
            <button className="btn btn-warning" onClick={handleMul}>
              Multiply
            </button>
          </div>
          <p className="text-center mt-3">Total is {total}</p>
        </div>
      </div>
    </div>
  );
};

export default App;

