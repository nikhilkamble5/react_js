import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Service from "./components/Service";
import PageNotFound from "./components/PageNotFound";

import FinancialCalculators from "./components/FinancialCalculators";
import SimpleInterestCalculator from "./components/SimpleInterestCalculator";
import CompoundInterestCalculator from "./components/CompoundInterestCalculator";
import HealthCalculators from "./components/HealthCalculators";
import ConversionCalculators from "./components/ConversionCalculators";
import GeometryCalculators from "./components/GeometryCalculators";
import MathCalculators from "./components/MathCalculators";

const App = () => {
  return (
    <>
      <h1 className="text-center bg-dark p-3 text-white">React Router</h1>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact/:name/:name2" element={<Contact />} />
          <Route path="/service" element={<Service />} />

          {/* Routes for calculator categories */}
          <Route path="/financial" element={<FinancialCalculators />} />
          <Route
            path="/financial/simple-interest"
            element={<SimpleInterestCalculator />}
          />
          <Route
            path="/financial/compound-interest"
            element={<CompoundInterestCalculator />}
          />
          {/* Add more routes for each calculator */}

          <Route path="/health" element={<HealthCalculators />} />
          <Route path="/conversion" element={<ConversionCalculators />} />
          <Route path="/geometry" element={<GeometryCalculators />} />
          <Route path="/math" element={<MathCalculators />} />

          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
