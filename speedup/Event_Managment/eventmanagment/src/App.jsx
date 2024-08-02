// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter } from "react-router-dom";
import EventList from "./pages/EventList/EventList";
import FilterEvent from "./pages/FilterEvent/FilterEvent";
import EvenDetails from "./pages/EvenDetails/EvenDetails";
import { routes } from "./routes/routes";

const App = () => {
  const router=createBrowserRouter(routes)
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EvenDetails />} />
        <Route path="/about" element={<FilterEvent />} />
        <Route path="/contact" element={<EventList />} />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
