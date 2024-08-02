import { useNavigate, useParams } from "react-router-dom";

// Contact.jsx
const Contact = () => {
  const nav = useNavigate();

  const GoHome = () => {
    nav("/");
  };
  const data =useParams();
  const {name,name2}=useParams();
  console.log(data);
  return (
    <>
      <h1 className="text-center my-4 fw-bold">Contact Page Component</h1>
     <h1>Hello ur nae is {data.name}</h1>
     <h1>Hello ur nae is {name2}</h1>

     
      <center>
        <button
          onClick={() => GoHome()}
          className="btn btn-danger my-4 px-3 fw-bold mx-4"
        >
          Go Home
        </button>
        <button
          onClick={() => nav("/about")}
          className="btn btn-primary my-4 px-3 fw-bold"
        >
          About Us
        </button>
      </center>
    </>
  );
};

export default Contact;
