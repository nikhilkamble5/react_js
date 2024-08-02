// import React from "react";
// import { Link, Outlet } from "react-router-dom";

// function User() {
//   return (
//     <div className="w-1/2 m-auto mt-10">
//       <h1 className="text-red-200 text-5x1 mb-2">User</h1>

//       <div className="flex w-1/2 flex-col mt-3">
//         <Link
//           className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300 "
//           to="/user/john"
//         >
//           John
//         </Link>
//         <Link
//           className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300 "
//           to="/user/ayush"
//         >
//           Ayush
//         </Link>
//         <Link
//           className="p-3 bg-red-200 text-2xl mb-3 hover:bg-red-300 "
//           to="/user/anubhav"
//         >
//           Anubhav
//         </Link>
//       </div>
//       <hr />
//       <Outlet/>
//       {/* <button className="p-3 bg-zinc-200">Explore More</button> */}
//     </div>
//   );
// }

// export default User;

//================context api

import React from 'react'
import UserDetail from './UserDetail'

const User = () => {
  return (
    <div>
      <UserDetail/>
    </div>
  )
}

export default User
