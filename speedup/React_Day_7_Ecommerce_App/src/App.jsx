// import React from "react";
// import Products from "./Products";

// export default class App extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       name: "shubam",
//       // show:true,

//       electronics: true,
//       other: true,
//     };
//   }

//   OtherData = () => {
//     this.setState({
//       electronics:false,
//       other:true,
//     })
//   };

//   electronicsData=()=>{
//     this.setState({
//       electronics:true,
//       other:false,
//     })
//   }
//   render() {
//     //  array object render chya att ast

//     const Electronics_Products = [
//       {
//         id: 1,
//         name: "Laptop",
//         img: "assets/l1.webp",
//         btn1: "Add To cart",
//         btn2: "Buy Now",
//       },

//       {
//         id: 2,
//         name: "Iphone",
//         img: "assets/i1.jpg",
//         btn1: "Add To cart",
//         btn2: "Buy Now",
//       },
//       {
//         id: 3,
//         name: "Tablet",
//         img: "assets/a1.webp",
//         btn1: "Add To cart",
//         btn2: "Buy Now",
//       },

//       {
//         id: 3,
//         name: "Laptop",
//         img: "assets/l1.webp",
//         btn1: "Add To cart",
//         btn2: "Buy Now",
//       },
//     ];
//     const OtherData = [
//       {
//         id: 1,
//         name: "fruits",
//         img: "assets/jam.webp",
//         btn1: "Add To cart",
//         btn2: "Buy Now",
//       },

//       {
//         id: 4,
//         name: "fruits",
//         img: "assets/j1.webp",
//         btn1: "Add To cart",
//         btn2: "Buy Now",
//       },
//     ];

//     return (
//       <>
      
//         <h1 className="bg-dark text-center text-warning p-4 my-3 fw-bold">
//           Ecommerse Bold
//         </h1>

//         {/* ************************************ */}
        

//         {/* *************************************** */}

//         <div className="container-fluid">
//           <div className="row text-center">
//             <div className="col-md-12">
//               <button className="btn btn-danger px- fw-bold my-4 mx-3" onClick={()=>this.electronicsData()}>
//                 Electronics product
//               </button>
//               <button
//                 className="btn btn-primary px- fw-bold my-4 mx-3"
//                 onClick={() => this.OtherData()}
//               >
//                 Others product
//               </button>
//               <div className="col-md-12">
//                 <div className="row">
//                   {/* conditional rendering  */}

//                   {this.state.electronics
//                     ? Electronics_Products.map((val, index) => {
//                         return (
//                           <div className="col-md-3" key={val.id}>
//                             <Products
//                               name={val.name}
//                               img={val.img}
//                               btn1={val.btn1}
//                               btn2={val.btn2}
//                             />
//                           </div>
//                         );
//                       })
//                     : null}
//                 </div>
//               </div>
//             </div>

//             {/*  */}

//             <div className="col-md-12">
//               <div className="row">
//                 {
                
//                 this.state.other &&
//                 OtherData.map((val, index) => {
//                   return (
//                     <div className="col-md-3 my-3" key={val.id || index}>
//                       <Products
//                         name={val.name}
//                         img={val.img}
//                         btn1={val.btn1}
//                         btn2={val.btn2}
//                       />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <button onClick={()=>this.setState({show:!this.state.show})}>Toggel Data</button>
//         {
//           this.state.show ? <p>Lorem ipsum dolor sit amet.</p>:null
//         } */}
//       </>
//     );
//   }
// }


import React from "react";
import Products from "./Products";

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "shubam",
      electronics: true,
      other: true,
    };
  }

  OtherData = () => {
    this.setState({
      electronics: false,
      other: true,
    });
  };

  electronicsData = () => {
    this.setState({
      electronics: true,
      other: false,
    });
  };

  render() {
    const Electronics_Products = [
      {
        id: 1,
        name: "Laptop",
        img: "assets/l1.webp",
        btn1: "Add To cart",
        btn2: "Buy Now",
      },
      {
        id: 2,
        name: "Iphone",
        img: "assets/i1.jpg",
        btn1: "Add To cart",
        btn2: "Buy Now",
      },
      {
        id: 3,
        name: "Tablet",
        img: "assets/a1.webp",
        btn1: "Add To cart",
        btn2: "Buy Now",
      },
      {
        id: 4,
        name: "Laptop",
        img: "assets/l1.webp",
        btn1: "Add To cart",
        btn2: "Buy Now",
      },
    ];

    const OtherData = [
      {
        id: 1,
        name: "fruits",
        img: "assets/jam.webp",
        btn1: "Add To cart",
        btn2: "Buy Now",
      },
      {
        id: 2,
        name: "fruits",
        img: "assets/j1.webp",
        btn1: "Add To cart",
        btn2: "Buy Now",
      },
    ];

    return (
      <>
        <h1 className="bg-dark text-center text-warning p-4 my-3 fw-bold">
          E-commerce Bold
        </h1>

        {/* Carousel */}
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
          data-interval="1000" // Adjusts interval to 1 second
        >
          <div className="carousel-inner" style={{ maxHeight: "300px" }}> {/* Reduced height */}
            {Electronics_Products.map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <img src={item.img} className="d-block w-100" alt={item.name} />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-target="#carouselExampleControls"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-target="#carouselExampleControls"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </button>
        </div>

        {/* Buttons and Products */}
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-md-12">
              <button
                className="btn btn-danger px- fw-bold my-4 mx-3"
                onClick={this.electronicsData}
              >
                Electronics Products
              </button>
              <button
                className="btn btn-primary px- fw-bold my-4 mx-3"
                onClick={this.OtherData}
              >
                Other Products
              </button>
            </div>

            <div className="col-md-12">
              <div className="row">
                {this.state.electronics &&
                  Electronics_Products.map((val) => (
                    <div className="col-md-3" key={val.id}>
                      <Products
                        name={val.name}
                        img={val.img}
                        btn1={val.btn1}
                        btn2={val.btn2}
                      />
                    </div>
                  ))}
              </div>
            </div>

            <div className="col-md-12">
              <div className="row">
                {this.state.other &&
                  OtherData.map((val, index) => (
                    <div className="col-md-3 my-3" key={val.id || index}>
                      <Products
                        name={val.name}
                        img={val.img}
                        btn1={val.btn1}
                        btn2={val.btn2}
                      />
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
