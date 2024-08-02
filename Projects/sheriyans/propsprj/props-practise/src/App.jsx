// // import React from "react";
// // import Card from "./Card";

// // const App = () => {
// //   return (
// //     <div>
// //       <Card text="Know More" color="bg-blue-600" />
// //       <Card text="Download" color="bg-red-700" />
// //     </div>
// //   );
// // };

// // export default App;

// // ===============================================

// // import React, { useState } from "react";
// // import Card from "./Card";
// // Card;
// // const App = () => {
// //   const data = [
// //     {
// //       name: "john",
// //       profession: "Painter",
// //       image:
// //         "https://images.unsplash.com/photo-1710563160039-82f7c29ed468?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //       friends: false,
// //     },
// //     {
// //       name: "Moxy",
// //       profession: "Artist",
// //       image:
// //         "https://images.unsplash.com/photo-1710250199975-f08a590a6071?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //       friends: false,
// //     },
// //     {
// //       name: "Paul",
// //       profession: "Thalua",
// //       image:
// //         "https://images.unsplash.com/photo-1710145604898-bb62a09123a4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //       friends: false,
// //     },
// //     {
// //       name: "Punk",
// //       profession: "coder",
// //       image:
// //         "https://images.unsplash.com/photo-1599363987217-605ae31a9695?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //       friends: false,
// //     },
// //   ];

// //   const [realdat,setRealData]=useState(data)
// //   return (
// //     <>
// //       <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
// //         {data.map((item, index) => (
// //           // <Card
// //           //   image={item.image}
// //           //   name={item.name}
// //           //   profession={item.profession}
// //           // />
// //           <Card key={index} values={item} />
// //         ))}
// //       </div>
// //     </>
// //   );
// // };

// // export default App;

// //🔥👇 Props drilling

// import React, { useState } from "react";
// import Card from "./Card";
// Card;
// const App = () => {
//   const data = [
//     {
//       name: "john",
//       profession: "Painter",
//       image:
//         "https://images.unsplash.com/photo-1710563160039-82f7c29ed468?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       friends: false,
//     },
//     {
//       name: "Peter",
//       profession: "Artist",
//       image:
//         "https://images.unsplash.com/photo-1710250199975-f08a590a6071?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       friends: false,
//     },
//     {
//       name: "Paul",
//       profession: "Trader",
//       image:
//         "https://images.unsplash.com/photo-1710145604898-bb62a09123a4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       friends: false,
//     },
//     {
//       name: "Punk",
//       profession: "coder",
//       image:
//         "https://images.unsplash.com/photo-1599363987217-605ae31a9695?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       friends: false,
//     },
//   ];

//   const [realdata, setRealData] = useState(data);
//   const handleFriendsButton = (cardindex) => {
//     setRealData((previous) => {
//       return previous.map((item, index) => {
//         if (index === cardindex) {
//           return { ...item, friends: !item.friends };
//         }
//         return item;
//       });
//     });
//   };
//   return (
//     <>
//       <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
//         {realdata.map((item, index) => (
//           <Card
//             key={index}
//             index={index}
//             handleClick={handleFriendsButton}
//             values={item}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default App;

import React, { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

function App() {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1710744722644-2114b2624557?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "challenger",
      artis: "Harsh",
      added: false,
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1710361778453-627fdab52ed9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "challenger",
      artis: "Harsh",
      added: false,
    },
    {
      image:
        "https://images.unsplash.com/photo-1682685797743-3a7b6b8d8149?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "beliver",
      artis: "one Day",
      added: false,
    },

    {
      image:
        "https://images.unsplash.com/photo-1682687220777-2c60708d6889?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "you cant see mee",
      artis: "john  cena",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(data);
  const handleClick = (index) => {
    setSongData((prev) => {
      return prev.map((item, itemindex) => {
        if (itemindex === index) return { ...item, added: !item.added };
        return item;
      });
    });
  };
  return (
    <>
      <div className="w-full h-screen bg-zinc-300">
        <Navbar data={songData}/>
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          {songData.map((obj, index) => {
            return (
              <Card
                data={obj}
                handleClick={handleClick}
                index={index}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
