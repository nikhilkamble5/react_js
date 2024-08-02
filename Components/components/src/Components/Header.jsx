import React from "react";
import "./Header.css";
import pumalogo from "/public/pumalogo.png"

const Header = () => {
  return (
    <div className="header">
      <div>
        <div>
          <img src={pumalogo} alt="pumalogo"  />
        </div>
        
      </div>
    </div>
  );
};

export default Header;
