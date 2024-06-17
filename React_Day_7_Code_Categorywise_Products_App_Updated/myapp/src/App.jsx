import React, { Component } from "react";
import Products from "./Products";

export default class App extends Component {
  render() {
    //product array objetc
    const Elect_Prod = [
      {
        id: 1,
        name: "Iphone",
        img: "/image/i1.jpg",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },

      {
        id: 2,
        name: "Buds",
        img: "/image/buds.jpeg",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },

      {
        id: 3,
        name: "Tablet",
        img: "/image/a1.webp",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
    ];

    const Other_Products = [
      {
        id: 4,
        name: "Dry Fruit",
        img: "/image/f2.webp",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },

      {
        id: 5,
        name: "Jam",
        img: "/image/jam.webp",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
      {
        id: 6,
        name: "Dry Fruit",
        img: "/image/f2.webp",
        btn1: "Add To Cart",
        btn2: "Buy Now",
      },
    ];
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <h1 className=" text-center p-2 mb-2 fw-bold  text-warning">Ecommerse App</h1>
            </div>
{/* ********************************************** */}
     <div className="col-md-12 text-center bg-dark p-3" >
     <button className="btn btn-secondary px-4 fw-bold my-3">All Product</button>
      <button className="btn btn-danger px-4 mx-4 fw-bold my-3">Electronic Product</button>
      <button className="btn btn-primary px-4 fw-bold my-3">Other Product</button>
     </div>

{/* ********************************************** */}

            <div className="col-md-12">
              <div className="row">
                {Elect_Prod.map((val) => {
                  return (
                    <div className="col-md-3" key={val.id}>
                      <Products
                        name={val.name}
                        img={val.img}
                        btn1={val.btn1}
                        btn2={val.btn2}
                      />
                    </div>

                    // **************************

                    // other product
                  );
                })}

{
                      Other_Products.map((val)=>{
                      return(
                        
                        <div className="col-md-3" key={val.id}>
                        <Products
                        name={val.name}
                        img={val.img}
                        btn1={val.btn1}
                        btn2={val.btn2}
                      />
                        </div>
                        
                      )
                    })

                    }
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
