import React from "react";
const Products = (props) => {
  //object Destructuring

  const { name, img, btn1, btn2 ,Ram,Price,Type} = props;

  return (
    <>
      <div className="card ">
        <div className="card-header">
          <h1 className="text-center text-dark">{name}</h1>
        </div>
        <div className="card-body p-3 text-center">
          <img
            src={img}
            className="img-fluid"
            alt=""
            style={{ height: "300px" }}
          />
             <div className="mb-2">
            <span className="badge bg-primary me-2">Ram: {Ram}</span>
            <span className="badge bg-secondary">Price: {Price}</span>
          </div>
        </div>
        <div className="card-footer text-center">
          <button className="btn btn-danger px-4 fw-bold mx-2 btn-sm">
            {btn1}{" "}
          </button>
          <button className="btn btn-outline-primary px-4 fw-bold mx-2 btn-sm">
            {btn2}{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
