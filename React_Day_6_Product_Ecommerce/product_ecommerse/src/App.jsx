import React from "react";
import Products from "./Products";
import Prooduct2 from "./Prooduct2";
import Product3 from "./Product3";

const App = () => {
  //product Array object

  const Product_Data = [
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
      name: "Dry Fruit",
      img: "/image/f2.webp",
      btn1: "Add To Cart",
      btn2: "Buy Now",
    },
    {
      id: 4,
      name: "Samsung",
      img: "/image/jam.webp",
      btn1: "Add To Cart",
      btn2: "Buy Now",
    },
  ];
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1 className="bg-dark p-4 my-3 fw-bold text-light">
              Ecommerse Products
            </h1>
          </div>

          <div className="col-md-12">
            <div className="row">
              {/* <div className="col-md-4">
              <Products name='Mobile' img="/image/i1.jpg" btn1="Add To Cart" btn2="buy Now"/>
              </div>
               */}
              {/* ************************************************ */}
              {/* <div className="col-md-4">
                <Prooduct2 name="Buds" img="/image/buds.jpeg" btn1="Add To Cart" btn2="Buy Now"/>
              </div> */}

              {/* ************************************************ */}

              {/* <div className="col-md-4">
    
          <Product3  name="Dry Fruits" img="/image/f2.webp" btn1="Add To Cart" btn2="Buy Now"/>
      </div> */}
              {/* ************************************************ */}

              {/* *************************************************** */}

              {/*  Dynamik work */}
              {/* <div className="col-md-4">
              <Products name='Mobile' img="/image/i1.jpg" btn1="Add To Cart" btn2="buy Now"/>
              </div>

              <div className="col-md-4">
              <Products name='Buds' img="/image/buds.jpeg" btn1="Add To Cart" btn2="buy Now"/>
              </div>

              <div className="col-md-4">
              <Products name='Dry Fruits' img="/image/f2.webp" btn1="Add To Cart" btn2="buy Now"/>
              </div> */}

              {/* ********************** */}

              {/* <div className="col-md-4">
                <Products
                  name={Product_Data[0].name}
                  img={Product_Data[0].img}
                  btn1={Product_Data[0].btn1}
                  btn2={Product_Data[0].btn2}
                />
              </div>

              <div className="col-md-4">
                <Products
                  name={Product_Data[1].name}
                  img={Product_Data[1].img}
                  btn1={Product_Data[1].btn1}
                  btn2={Product_Data[1].btn2}
                />
              </div> */}
{/* ****************************************** */}

                {/* Iterating Array object Data   Using Map Method and display data  */}

                  {
                    Product_Data.map((val)=>{
                      return(
                        
                          <div className="col-md-4" key={val.id || index}>
                            <Products name={val.name} 
                            img={val.img} btn1={val.btn1} btn2={val.btn2}
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
};

export default App;
