import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";
import Navbar from "../src/component/Navbar";
import Header from "./Header";
import FinancialCalculators from "./FinancialCalculators";
import BMICalculator from "./BMICalculator";
import SimpleInterestCalculator from "./SimpleInterestCalculator";
const App = () => {

  return (
    <>
      <Router>
        <Routes>
          {/* nesting routing */}
          <Route path="/" element={<Header/>}>

          {/* index Routing */}
          <Route index element={<Home/>}/>
          {/* child Route */}
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/service" element={<Service />}></Route>
            <Route path="/financialCalculators" element={<FinancialCalculators />}></Route>
            <Route path="/bmi" element={<BMICalculator />}></Route>
            <Route path="/simplecalculator" element={<SimpleInterestCalculator />}></Route>


            
            {/* fall back routing  */}
            <Route path="*" element={<Home />}></Route>
          {/*  */}
          
          </Route>

          <Route path="/login" element={<h1>Login page</h1>}>
          <Route index  element={<h1>Login Dash</h1>}></Route>
          <Route path="login/forgotpassword" element={<h1>Forgot pass</h1>}></Route>

          </Route>
        </Routes>
      </Router>

 
    </>
  );
};

export default App;
