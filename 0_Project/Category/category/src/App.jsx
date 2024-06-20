// import React from "react";
// import { useRef } from "react";
// import { useState } from "react";

// const App = () => {
//   const User1 = [{ id: 1, name: "Nikhil", skill: "reat", Role: "webDev" }];
//   const User2 = [{ id: 1, name: "Nikhil", skill: "reat", Role: "webDev" }];

//   const User3 = [{ id: 1, name: "Nikhil", skill: "reat", Role: "webDev" }];

//   const[data,setData]=useState();
//   const userData=useRef(null)

//   const GetUser=()=>{

//   }
//   return <>

//     <label htmlFor="">Chose User</label>
//     <select name="" id="" ref={userData} onChange={()=>GetUser()}>
//     <option value="">Select</option>
//     <option value="user1">User1</option>
//     <option value="user2">User1</option>
//     <option value="user3">User1</option>
//     </select>

//       {
//         data.map((val)=>{
//           <li key={val.id}>
//             name :{val.name}
//              </li>

//         })
//       }
//   </>;
// };

// export default App;

// import React, { useRef, useState } from "react";

// const App = () => {
//   const User1 = [{ id: 1, name: "Nikhil", skill: "reat", Role: "webDev" }];
//   const User2 = [{ id: 1, name: "ravi", skill: "reat", Role: "webDev" }];
//   const User3 = [{ id: 1, name: "pawan", skill: "reat", Role: "webDev" }];

//   const [data, setData] = useState([]); // Initialize data state with an empty array
//   const userData = useRef(null);

//   const GetUser = () => {
//     const selectedValue = userData.current.value;
//     switch (selectedValue) {
//       case "user1":
//         setData(User1);
//         break;
//       case "user2":
//         setData(User2);
//         break;
//       case "user3":
//         setData(User3);
//         break;
//       default:
//         setData([]);
//         break;
//     }
//   };

//   return (
//     <>
//       <label htmlFor="">Choose User</label>
//       <select name="" id="" ref={userData} onChange={GetUser}>
//         <option value="">Select</option>
//         <option value="user1">User 1</option>
//         <option value="user2">User 2</option>
//         <option value="user3">User 3</option>
//       </select>

//       <ul>
//         {data.map((val) => (
//           <li key={val.id}>
//             name: {val.name},skill:{val.skill},Role:{val.Role}
//             </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";
// import { useRef } from "react";
// import Products from "./Products";

// const App = () => {
//   // const User1 = [{ id: 1, name: "Nikhil", skill: "reat", Role: "webDev" }];
//   // const User2 = [{ id: 1, name: "ravi", skill: "reat", Role: "webDev" }];
//   // const User3 = [{ id: 1, name: "pawan", skill: "reat", Role: "webDev" }];
//   const User1 = [
//     {
//       id: 1,
//       name: "Nikhil",
//       img: "/image/i1.jpg",
//       btn1: "Edit",
//       btn2: "Delete",
//       skill: "react",
//       Role: "webDev",
//     },
//   ];
//   const User2 = [
//     {
//       id: 1,
//       name: "Ravi",
//       img: "/image/buds.jpeg",
//       btn1: "Edit",
//       btn2: "Delete",
//       skill: "react",
//       Role: "webDev",
//     },
//   ];
//   const User3 = [
//     {
//       id: 1,
//       name: "Pawan",
//       img: "/image/a1.webp",
//       btn1: "Edit",
//       btn2: "Delete",
//       skill: "react",
//       Role: "webDev",
//     },
//   ];
//   const [data, setData] = useState(User1);
//   const [selectedUser, setSelectedUser] = useState("User 1");
//   const selectRef = useRef(null);

//   const GetUser = () => {
//     const selectValue = selectRef.current.value;
//     switch (selectValue) {
//       case "user1":
//         setData(User1);
//         setSelectedUser("User 1");
//         break;

//       case "user2":
//         setData(User2);
//         setSelectedUser("User 2");
//         break;
//       case "user3":
//         setData(User3);
//         setSelectedUser("User 3");
//         break;
//     }
//   };

//   // useState(() => {
//   //   setData(User1);
//   // });
//   return (
//     <>
//       <h1 className=" text-center p-2 mb-2 fw-bold  text-warning bg-dark ">User {selectedUser}</h1>
//       <select name="" id="" ref={selectRef} onChange={() => GetUser()}>
//         <option value="user1">USer1</option>
//         <option value="user2">USer2</option>
//         <option value="user3">USer3</option>
//       </select>

//       <ul>
//         {data.map((val) => (
//           // <li key={val.id}>
//                       <li key={val.id}>

//             {/* {" "}
//             name:{val.name}, skill:{val.skill},Role:{val.Role} */}

//              <div className="col-md-3" key={val.id}>
//                       <Products
//                         name={val.name}
//                         img={val.img}
//                         btn1={val.btn1}
//                         btn2={val.btn2}
//                         skill={val.skill}
//                         Role={val.Role}
//                       />
//                     </div>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default App;
//******************************************************* */

import React, { useState, useRef } from "react";
import Products from "./Products";

const App = () => {
  const Iphone = [
    {
      id: 1,
      name: "Iphone",
      img: "/image/i1.jpg",
      btn1: "Add To Cart",
      btn2: "Buy Now",
      Ram: "4Gb",
      Price: "60000",
    },
  ];
  const Laptop = [
    {
      id: 1,
      name: "Laptop",
      img: "/image/l1.webp",
      btn1: "Add To Cart",
      btn2: "Buy Now",
      Ram	: "16 Gb",
      Price: "40000",
    },
  ];
  const Tablet = [
    {
      id: 1,
      name: "Tablet",
      img: "/image/a1.webp",
      btn1: "Add To Cart",
      btn2: "Buy Now",
      Ram: "2GB",
      Price: "2500",
    },
  ];

  const [data, setData] = useState(Iphone);
  const [selectedUser, setSelectedUser] = useState("Iphone");
  const selectRef = useRef(null);

  const GetUser = () => {
    const selectValue = selectRef.current.value;
    switch (selectValue) {
      case "user1":
        setData(Iphone);
        setSelectedUser("Iphone ");
        break;
      case "user2":
        setData(Laptop);
        setSelectedUser("Laptop ");
        break;
      case "user3":
        setData(Tablet);
        setSelectedUser("Tablet ");
        break;
      default:
        setData([]);
        setSelectedUser("");
        break;
    }
  };

  return (
    <>
      <div className="container-fluid  ">
        <h1 className="mb-4 text-center p-2 mb-2 fw-bold  text-warning bg-dark w-100">
           {selectedUser}
        </h1>
        <div className="mb-3">
          <label htmlFor="userSelect" className="form-label">
            Select Product
          </label>
          <select
            className="form-select"
            id="userSelect"
            ref={selectRef}
            onChange={GetUser}
          >
            <option value="">Select </option>
            <option value="user1">Product 1</option>
            <option value="user2">Product 2</option>
            <option value="user3">Product 3</option>
          </select>
        </div>

        <div className="row">
          {data.map((val) => (
            <div className="col-md-4 mb-3" key={val.id}>
              <Products
                name={val.name}
                img={val.img}
                btn1={val.btn1}
                btn2={val.btn2}
                Ram={val.Ram}
                Price={val.Price}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;

