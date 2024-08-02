// import React from "react";
// import { useRef } from "react";

// function App() {
//   const name = useRef(null);
//   const age = useRef(null);
//   const email = useRef(null);
//   const handleSubmit = (details) => {
//     details.preventDefault();
//     console.log(name.current.value, age.current.value , email.current.value);
//   };
//   return (
//     <div>
//     c
//     </div>
//   );
// }

// export default App;

//form use s=usestate

// froem 3 ways ni create hoto use 1]userRef 2[controlled component 3] react hook form

// import React from "react";

// function App() {
//   return (
//     <div className="p-4">
//       <form action="">
//         <input className=" border-2 " type="text" placeholder="name " />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// }

// export default App;

// using usee Ref

// import React, { useRef } from "react";

// function App() {
//   const name = useRef(null);
//   const age = useRef(null);
//   const email = useRef(null);

//   const handdleSubmit = (details) => {
//     details.preventDefault();
//     console.log(name.current.value, age.current.value, email.current.value);
//   };
//   return (
//     <form action="" onSubmit={handdleSubmit}>
//       <input ref={name} placeholder="name" type="text" />
//       <input ref={age} placeholder="age" type="text" />
//       <input ref={email} placeholder="email" type="text" />

//       <input type="submit" />
//     </form>
//   );
// }

// export default App;

// 2nd way stor form
//controlled component

// import React, { useRef, useState } from "react";

// function App() {
//  const [val,setVal]= useState({name:"",email:""});

//  const handleSubmit=(event)=>{
//   event.preventDefault();
//   console.log(val);
//  }
//   return (
//     <form action="" onSubmit={handleSubmit}>
//       <input onChange={(event)=>setVal({...val,name:event.target.value})} placeholder="name" type="text" />
//       <input onChange={(event)=>setVal({...val,age:event.target.value})} placeholder="name" type="text" />

//       <input onChange={(event)=>setVal({...val,email:event.target.value})} placeholder="email" type="text" />

//       <input type="submit" />
//     </form>
//   );
// }

// export default App;

//3] React Hook

// import React from "react";
// import { useForm } from "react-hook-form";
// function App() {
//   const { register, handleSubmit } = useForm();

//   useForm;

//   return (
//     <div>
//       <form action="" onSubmit={handleSubmit((data) => console.log(data))}>
//         <input {...register("name")} type="text" placeholder="name" />
//         <input {...register("email")} type="text" placeholder="email" />
//         <input  type="submit" />
//       </form>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [users, setUsers] = useState([]);
  const handleFormSubmitData = (data) => {
    setUsers([...users, data]);
  }
  const handleRemove = (id) => {
    setUsers(() => users.filter((item, index) => index != id));
  }
  return (
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="container mx-auto">
        <Cards handleRemove={handleRemove} users={users} />
        <Form handleFormSubmitData={handleFormSubmitData} />
      </div>
    </div>
  );
}

export default App;
