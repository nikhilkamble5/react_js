import React from "react";
import { NavLink } from "react-router-dom";

const FinancialCalculators = () => {
  return (
    <div>
      <h2>Financial Calculators</h2>
      <ul>
        <li>
          <NavLink to="/financial/simple-interest">
            Simple Interest Calculator
          </NavLink>
        </li>
        <li>
          <NavLink to="/financial/compound-interest">
            Compound Interest Calculator
          </NavLink>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default FinancialCalculators;
