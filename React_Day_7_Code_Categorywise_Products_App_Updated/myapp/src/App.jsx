import React, { Component } from 'react'
import Products from './Products'

export default class App extends Component {


  render() {

    //product array objetc
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
            <h1 className=' text-center p-4 my-3 fw-bold  text-warning'>Ecommerse App</h1>
          </div>

            <div className="col-md-12">
              <div className="row">

                {
                  Product_Data.map((val)=>{
                    return(
                      
                      
                <div className="col-md-3"  key={val.id}>
                <Products name={val.name}  img={val.img} btn1={val.btn1} btn2={val.btn2}/>
                </div>
                      
                    )
                  })
                }
             
              </div>
            </div>
        </div>
      </div>

      </>
    )
  }
}
