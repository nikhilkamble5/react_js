import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import PageNotFound from "./PageNotFound";

const App = () => {
  return (
    <>

      <Router>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact/:name/:name2" element={<Contact/>}></Route>
        <Route path="/service" element={<Services/>}></Route>
        {/* <Route path="*" element={<Home />} /> */}

        {/* Fall Back routing  when apth is wrong
         */}
         {/* wildcard used */}
         <Route  path="*" element={<PageNotFound/>}/>


</Routes>

      </Router>
      
    </>
  );
};

export default App;
