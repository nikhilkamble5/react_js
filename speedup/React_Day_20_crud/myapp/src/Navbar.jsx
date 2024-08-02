// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-nav navbar-dark tex-light fw-bold bg-dark">
//       <NavLink className="navbar-brand"><h2 className="text-warning fw-bold">Crud App</h2></NavLink>
//       <button className="navbar-toggler" data-bs-target="#nav1" data-bs-toggle='collapse'><span className="navbar-toggler-icon"></span></button>

//       <div  className=' collapse navbar-collapse 'id="nav1">
//         <ul className="navbar-nav m-auto ">
        
//           <li className="nav-item">
//             <NavLink to="/" className="nav-link text-light fw-bold mx-5">
//               Home
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink
//               to="/userdata"
//               className="nav-link text-light fw-bold mx-5"
//             >
//               User Data
//             </NavLink>
//           </li>
//         </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
//         {/* Navbar Brand */}
//         <NavLink className="navbar-brand">
//           <h2 className="text-warning fw-bold">Crud App</h2>
//         </NavLink>

//         {/* Navbar Toggler */}
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav1" aria-controls="nav1" aria-expanded="false" aria-label="Toggle navigation">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         {/* Collapsible Navbar Content */}
//         <div className='collapse navbar-collapse' id="nav1">
//           {/* Navbar Items */}
//           <ul className="navbar-nav ms-auto"> {/* Added 'ms-auto' class to align items to the right */}
//             <li className="nav-item">
//               <NavLink to="/" className="nav-link text-light fw-bold mx-5">
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/userdata" className="nav-link text-light fw-bold mx-5">
//                 User Data
//               </NavLink>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


// ********************************
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        {/* Navbar Brand */}
        <NavLink className="navbar-brand">
          <h2 className="text-warning fw-bold">Crud App</h2>
        </NavLink>

        {/* Navbar Toggler */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav1" aria-controls="nav1" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar Content */}
        <div className='collapse navbar-collapse' id="nav1">
          {/* Empty div for spacing - Left Side */}
          <div className="me-auto"></div> {/* Added for spacing to center the nav items */}

          {/* Navbar Items */}
          <ul className="navbar-nav mx-auto"> {/* Added 'mx-auto' to center the nav items */}
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-light fw-bold mx-3"> {/* Changed 'mx-5' to 'mx-3' for consistent spacing */}
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/userdata" className="nav-link text-light fw-bold mx-3"> {/* Changed 'mx-5' to 'mx-3' for consistent spacing */}
                User Data
              </NavLink>
            </li>
          </ul>

          {/* Empty div for spacing - Right Side */}
          <div className="ms-auto"></div> {/* Added for spacing to center the nav items */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
