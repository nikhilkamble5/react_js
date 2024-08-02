import React from "react";

// import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {" "}
        <Navbar />
        <Home />{" "}
      </>
    ),
  },
  {
    path: "/login",
    element: (
      <>
        {" "}
        <Navbar />
        <Login />{" "}
      </>
    ),
  },
  {
    path: "/about",
    element: (
      <>
        {" "}
        <Navbar />
        <About />{" "}
      </>
    ),
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
