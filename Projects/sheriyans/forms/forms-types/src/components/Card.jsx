// import React from "react";

// function Card({users}) {
//   return (
//     <>
//    {users.map((item,index)=>{
//      return<div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
//     <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden">
//       {/* <img className="w-full h-full object cover" src="" alt="" /> */}
//     </div>
//     <h1 className=" mt-1 text-xl font-semibold">Harsh</h1>
//     <h4 className="opacity-40 text-xs font-semibold"> harsh@male.com</h4>
//     <p className=" mt-1 text-center text-xs font-semibold  leading-1 tracking-tight ">
//       Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos id unde
//       tenetur eum repudiandae velit.
//     </p>
//     <button className="px-3 py1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4">Remove it</button>
//   </div>

//    })}
//    </>
//   );
// }

// export default Card;
// 

function Card({ user,handleRemove,id }) {
  return (
  

        <div className="w-52 h-full bg-zinc-100 rounded-lg flex flex-col items-center p-2">
          <div className="image w-[3vw] h-[3vw] rounded-full bg-zinc-200 overflow-hidden">
            <img className="w-full h-full object cover" src={user.image} alt="" />
          </div>
          <h1 className=" mt-1 text-xl font-semibold text-center leading-none">{user.name}</h1>
          <h4 className="opacity-40 text-xs font-semibold"> {user.email}m</h4>
          <p className=" mt-1 text-center text-xs font-semibold  leading-1 tracking-tight ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos id unde
            tenetur eum repudiandae velit.
          </p>
          <button onClick={()=>handleRemove(id)} className="px-3 py1 bg-red-600 text-xs rounded-md font-semibold text-white mt-4">Remove it</button>
        </div>
 
    
  );
}

export default Card;
