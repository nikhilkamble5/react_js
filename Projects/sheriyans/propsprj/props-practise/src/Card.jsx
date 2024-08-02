// import React from "react";

// const Card = ({ text , color}) => {
//   return (
//     <button className={`py-3 py-1  ${color} text-zinc-100 text-xs rounded m-2`}>
//       {text}
//     </button>
//   );
// };

// export default Card;

// import React from "react";

// // const Card = ({ image,name,profession }) => {

// const Card = ({ values, handleClick ,index }) => {
//   const { image, name, profession, friends } = values;
//   return (
//     <div className="w-52 bg-white  rounded-md overflow-hidden ">
//       <div className="w-full h-40 bg-sky-200">
//         <img
//           className="w-full h-full object-cover object-[center_top]"
//           src={image}
//           alt=""
//         />
//       </div>
//       <div className="w-full p-3">
//         <h3 className="text-xl font-semibold">{name}</h3>
//         <h5 className="text-xs">{profession}</h5>
//         <button
//           onClick={()=>handleClick(index)}
//           className={`mt-4 px-3 py-1 text-xs text-white font-semibold ${friends ? "bg-green-600" :"bg-blue-500"} roundmt-md`}
//         >
//           {friends=== true ? "Friend" : "Add friend"}
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Card;

// import React from "react";

// function Card({data,handleClick,index}) {
//   const{image,artis,added,name}=data;
//   return (
//     <div className="w-60 bg-zinc-100 p-4 rounded-md flex -gap-4 pb-8 relative mt-10">
//       <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
//         <img  className='w-full h-full object-cover' src={image} alt="" />
//       </div>
//       <div className="">
//         <h3 className="text-xl leading-none font-semibold">{name}</h3>
//         <h6 className="text-sm">{artis}</h6>
//       </div>
//       <button onClick={()=>handleClick(index)=></div>} className={`px-4 py-3 whitespace-nowrap ${added===false ? "bg-orange-600" : "bg-teal-500"} absolute bottom-0 left left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-xs rounded-full`}>
//         {added===false? "Add To Favorates" : "Added"}
//       </button>
//     </div>
//   );
// }

// export default Card;

//Project
import React from "react";

function Card({data, handleClick, index}) {
  const {image, artis, added, name} = data;
  return (
    <div className="w-60 bg-zinc-100 p-4 rounded-md flex -gap-4 pb-8 relative mt-10">
      <div className="w-20 h-20 bg-orange-600 rounded-md overflow-hidden">
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div className="ml-2">
        <h3 className="text-xl leading-none font-semibold mb-1">{name}</h3>
        <h6 className="text-sm">{artis}</h6>
      </div>
      <button
        onClick={() => handleClick(index)}
        className={`px-4 py-3 whitespace-nowrap ${added === false ? "bg-orange-600" : "bg-teal-500"} absolute bottom-0 left left-1/2 -translate-x-[50%] translate-y-[50%] text-white text-xs rounded-full`}
      >
        {added === false ? "Add To Favorites" : "Added"}
      </button>
    </div>
  );
}

export default Card;
