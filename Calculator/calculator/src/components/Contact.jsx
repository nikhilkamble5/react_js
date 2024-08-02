import React from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
  const { name, name2 } = useParams();

  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        Contact person: {name} {name2}
      </p>
    </div>
  );
};

export default Contact;
