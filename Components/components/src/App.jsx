import React from "react";
import "./index.css"; // Import global styles
import "./App.css"; // Import styles specific to the App component

// Your other code...
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="app">
      <Header/>
     <Hero/>
     <Footer/>

    </div>
  );
};

export default App;
