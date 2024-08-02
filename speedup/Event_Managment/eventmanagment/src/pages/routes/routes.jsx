import React from "react";
import EventList from "../pages/EventList/EventList";
import FilterEvent from "../pages/FilterEvent/FilterEvent";
import EvenDetails from "../pages/EvenDetails/EvenDetails";
import './App.css'

export const routes = [
  { path: "/", element: <EventList /> },
  { path: "/find-events", element: <FilterEvent /> },
  { path: "/events/:id", element: <EvenDetails /> },
];
