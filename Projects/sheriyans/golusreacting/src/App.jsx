// import React from "react";
// import { useState } from "react";

// function App() {
//   const [banned, setBanned] = useState(false);

//   return (
//     <div className="p-4">
//       <h1>{banned.toString()}</h1>
//       <button
//         onClick={() => setBanned(!banned)}
//         className="px-2 py-2 mt-2 rounded-full text-xs bg-blue-500 text-white"
//       >
//         Chnage
//       </button>

//       {/* <div className="w-44 h-30 rounded-xl bg-red-600">Hello kese ho</div> */}
//       {/* Corrected Tailwind CSS class name */}
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { useState } from "react";

// function App() {
//   const [val, setVal] = useState({ name: "harsh", isBanned: false });

//   return (
//     <div className="p-4">
//       <h1>{val.name}</h1>
//       <h2>banned : {val.isBanned.toString()}</h2>
//       <button
//         onClick={() => setVal({ ...val, isBanned: !val.isBanned })}
//         className={`px-2 py-2 mt-2 rounded-full text-xs ${val.isBanned ? "bg-blue-500" : "bg-red-500"} text-white`}>
//         Chnage
//       </button>
//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
//   return (
//     <div className="p-5">
//       {val.map((item) => (
//         <h1>{item}</h1>
//       ))}
//       <button onClick={()=>setVal(()=>val.filter((item,index)=> index !=val.length-1))} className="px-2 py-1 text-xs text-white rounded-full bg-blue-500">
//         Click
//       </button>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
//   return (
//     <div className="p-5">
//       {val.map((item) => (
//         <h1>{item}</h1>
//         // array element acess hota map ni
//       ))}
//       <button onClick={()=>setVal(()=>val.filter((item,index)=> index!=2))} className="px-2 py-1 text-xs text-white rounded-full bg-blue-500">
//         Click
//       </button>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
//   return (
//     <div className="p-5">
//       {val.map((item) => (
//         <h1>{item}</h1>
//         // array element acess hota map ni
//       ))}
//       <button
//         onClick={() => setVal(() => val.filter((item) => item % 2 !== 0))}
//         className="px-2 py-1 text-xs text-white rounded-full bg-blue-500"
//       >
//         Click
//       </button>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
//   return (
//     <div className="p-5">
//       {/* {val.map((item) => (
//         <h1>{item}</h1> */}
//         {val.map((item)=><h1>{item}</h1>)}

//       <button
//         onClick={()=> setVal([...val,7])}
//         className="px-2 py-1 text-xs text-white rounded-full bg-blue-500"
//       >
//         Click
//       </button>
//     </div>
//   );
// };

// export default App;

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [val, setVal] = useState([
//     {name: "harsh",age:24},
//     {name: "shivam",age:25},
//     {name: "kohali",age:32},

//   ]);
//   return (
//     <div className="p-5">

//         {val.map((item)=>
//         <div>
//            <h1>{item.name}</h1>
//         <h2>{item.age}</h2>
//           </div>
//         )}

//       <button
//         onClick={()=>setVal(val.map(item=> item.name==="shivam" ?({name:"shivam",age:26}):item)) }
//         className="px-2 py-1 text-xs text-white rounded-full bg-blue-500">
//         Click
//       </button>
//     </div>
//   );
// };

// export default App;

//usestate Hook

// import React from "react";

// const Card = () => {
//   return (
//     <div className="w-fill h-screen bg-zinc-300 flex justify-center items-center">
//       <div className="w-60 h-32 bg-zinc rounded"></div>
//     </div>
//   );
// };

// export default Card;


import React from 'react';
import Card from './Card';

// Changed the placement of the comment to separate the import statements from the component declaration
const App = () => {
  return (
    <div>
      <Card></Card>
    </div>
  );
}

export default App; // Moved the comment to this line
