// import React from "react";

// import Nav from "./component/Nav";
// import Routing from "./utils/Routing";

// function App() {
//   return (
//     <>
//       <Nav/>
//       <Routing/>
//     </>
//   );
// }

// export default App;

//------------------------Api--------------------------

// import axios from "axios";
// import { Link, Route, Routes } from "react-router-dom";
// import Home from "./component/Home";
// import Show from "./component/Show";
// import Services from "./component/Services";

// const App = () => {
// const [products, setProducts] = useState([]);
// const getproduct = () => {
//   const api = "https://fakestoreapi.com/products";

//   axios
//     .get(api)
//     .then((products) => {
//       console.log(products);
//       setProducts(products.data);
//     })
//     .catch((err) => console.log(err));
// };

// const addproduct = () => {
//   const api = "https://fakestoreapi.com/products";

//   axios
//     .post(api, {
//       title: "test product",
//       price: 13.5,
//       description: "lorem ipsum set",
//       image: "https://i.pravatar.cc",
//       category: "electronic",
//     })
//     .then((products) => {
//       console.log(products);
//     })
//     .catch((err) => console.log(err));
// };
// console.log(products);
//   return (
//     <div className="pt-[5%] pl-[p%]">
//       <nav className="flex justify-center gap-10">
//         <Link to="/">Home</Link>
//         <Link to="/show">Show</Link>
//         <Link to="/services">Services</Link>
//       </nav>
//       <hr />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/show" element={<Show />} />
//         <Route path="/services" element={<Services />} />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React from "react";
import Home from "./component/Home";
import { Link, Route, Router } from "react-router-dom";
import User from "./component/User";
import About from "./component/About";

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/about">About</Link>
      </nav>

      <Router>
        <Route path="/" element={<Home/>} />
        <Route path="/user" element={<User/>} />
        <Route path="/about" element={<About/>} />


      </Router>
    </div>
  );
};

export default App;
