import React from "react";

const Products = (props) => {
  console.log(props);
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2 className="text-center font-weight-bold">{props.name}</h2>
        </div>
        <div className="card-body text-center">
          <img
            src={props.img}
            alt="img-fluid"
            style={{ height: "250px" }}
            // style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
        </div>
        <div className="card-footer p-3">
          <button className="btn btn-danger px-4 font-weight-bold mx-3">
            {props.btn1}
          </button>
          <button className="btn btn-outline-dark px-4 font-weight-bold mx-3">
            {props.btn2}
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
