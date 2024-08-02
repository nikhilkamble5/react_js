import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Contact from "./Contact";
import Services from "./Services";
import About from "./About";
import Header from "./Header";
import Admin from "./Admin";

const App = () => {
  return (
    <>
      <Router>
        {/* nested Routing   */}
        <Routes>
          <Route path="/" element={<Header />}>
            {/* index Routing */}
            <Route index element={<Home />} />
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/services" element={<Services />}></Route>
            <Route path="/about" element={<About />}></Route>

            {/* Fall back routing */}
            <Route path="*" element={<Home />} />
          </Route>

          {/* Admin Route */}
          {/* admin panel ROuting */}
          <Route path="/admin" element={<Admin/>}>
            <Route path="*" element={<Admin/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
