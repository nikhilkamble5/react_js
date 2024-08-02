import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    console.log("service component created");

    return () => {
      console.log("service comp is deleted");
    };
  });
  return <div>Services</div>;
};

export default Services;
