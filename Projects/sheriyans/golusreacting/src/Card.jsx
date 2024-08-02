// import React, { useState } from "react";

// function Card() {
//   const [val, setVal] = useState(true);
//   return (
//     <div>
//       <h1>{val === false ? "Bahar jao" : "Mat jao"}</h1>
//       <button onClick={()=> setVal(()=>(!val))} className="px-2 py-1 bg-blue-300">Chnage</button>
//     </div>
//   );
// }

// export default Card;

import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Card = () => {
  const [val, setVal] = useState(false);
  return (
    <div className="w-fill h-screen bg-zinc-300 flex justify-center items-center">
      <div className=" relative w-60 h-32 bg-zinc-500 rounded-md flex overflow-hidden">
        <img
          className={`shrink-0 transition-transform duration-700	ease-in-out	 ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%] "
          }  w-full h-full object-cover"`}
          src="https://images.unsplash.com/photo-1710739409411-9bec2ccb8fff?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />{" "}
        <img
          className={`shrink-0 transition-transform duration-700	ease-in-out	 ${
            val === false ? "-translate-x-[0%]" : "-translate-x-[100%] "
          }  w-full h-full object-cover"`}
          src="https://images.unsplash.com/photo-1708769573779-69b9080a3810?q=80&w=1775&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <span
          onClick={() => setVal(() => !val)}
          className="w-8 h-8  flex items-center justify-center rounded-full bg-[#dadada7b]         bg-zinc-200 absolute bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%]"
        >
          <FaArrowRight />
        </span>
        <FaArrowRight size={".7em"} />
      </div>
    </div>
  );
};

export default Card;
