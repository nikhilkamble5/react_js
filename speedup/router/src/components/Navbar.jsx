// import React from "react";
// const Navbar = () => {
//   return (
//     <div>
//       <nav>
//         <a href="">
//           <li>Home</li>
//         </a>
//         <a href="">
//           <li>About</li>
//         </a>

//         <a href="">
//           <li>Contact</li>
//         </a>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
Link
const Navbar = () => {
  return (
    <div>
      <nav>
      <Link to="/"><li>Home</li></Link>
      <Link to="/about"><li>About</li></Link>

      <Link to="/login"><li>login</li></Link>

      </nav>
    </div>
  );
};

export default Navbar;
