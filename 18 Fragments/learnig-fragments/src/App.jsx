// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {
//   let foodItems = [];
//   // let foodItems=["Dal","Green","TOmato","Roti","Fish"];

//   // if(foodItems.length===0){
//   //   return <h3>I am Still Hungry</h3>
//   // } if elese khali nahi use karu shakat

//   let emtyMessage=     foodItems.length===0 ? <h3> I am still hingry</h3> : null;
//   return (
//     <>
//       {/* fragmene t<> mhantat wrap karto ha */}

//       <h1>Healdthy Food</h1>
//       {/* {foodItems.length===0 ? <h3> I am still hingry</h3> : null} */}

//       {emtyMessage}
//       <ul className="list-group">
//         {foodItems.map((item) => (
//           <li key={item} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;

// import React from "react";
// import FoodItems from "./components/FoodItems";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// function App() {
//   // let foodItems = [];
//   let foodItems=["Dal","Green","TOmato","Roti","Fish"];

//   // if(foodItems.length===0){
//   //   return <h3>I am Still Hungry</h3>
//   // } if elese khali nahi use karu shakat

//   return (
//     <>
//       <h1>Healdthy Food</h1>

//       {foodItems.length === 0 && <h3> I am still Hungry.</h3>}
//       <FoodItems></FoodItems>
//     </>
//   );
// }

// export default App;

//Props 🔥👇

import React from "react";
import ErrorMessage from "./components/ErrorMessage";
import FoodItems from "./components/FoodItems";
import FoodInput from "./components/FoodInput";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./components/Container";

function App() {
  // let foodItems = [];
  let foodItems = ["Dal", "Green", "TOmato", "Roti", "Fish"];

  return (
    <>
      <Container>
        <h1 className="food-heading">Healdthy Food</h1>

        <ErrorMessage items={foodItems}></ErrorMessage>
        <FoodInput></FoodInput>
        <FoodItems items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        ABove is the list of helthy foods that are good for your health and well
        being
      </Container> */}
    </>
  );
}

export default App;
