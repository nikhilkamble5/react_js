// import React, { Component } from "react";
// import Products from "./Products";

// export default class App extends Component {

//   constructor(){
//     super()
    
//     this.state=({
//       //1
//       elect_data:true,
//       other_prod:true,
//     })
//   }

//   //handle Electronics products Data
//   Electronic_prod=()=>{
//     this.setState({
//       elect_data:true,
//       other_prod:false,
      
//     })
//   }

//   //handle other product

//   Handle_Other_Prod=()=>{
//     this.setState({
//       other_prod:true,
//       elect_data:false,
//     })
//   }
//   // Handle_All_Products
//   Handle_All_Products=()=>{
//     this.setState({
//       elect_data:true,
//       other_prod:true,
//     })
//   }
//   render() {
//     //product array objetc
//     const Elect_Prod = [
//       {
//         id: 1,
//         name: "Iphone",
//         img: "/image/i1.jpg",
//         btn1: "Add To Cart",
//         btn2: "Buy Now",
//       },

//       {
//         id: 2,
//         name: "Buds",
//         img: "/image/buds.jpeg",
//         btn1: "Add To Cart",
//         btn2: "Buy Now",
//       },

//       {
//         id: 3,
//         name: "Tablet",
//         img: "/image/a1.webp",
//         btn1: "Add To Cart",
//         btn2: "Buy Now",
//       },
//     ];

//     const Other_Products = [
//       {
//         id: 4,
//         name: "Dry Fruit",
//         img: "/image/f2.webp",
//         btn1: "Add To Cart",
//         btn2: "Buy Now",
//       },

//       {
//         id: 5,
//         name: "Jam",
//         img: "/image/jam.webp",
//         btn1: "Add To Cart",
//         btn2: "Buy Now",
//       },
//       {
//         id: 6,
//         name: "Dry Fruit",
//         img: "/image/f2.webp",
//         btn1: "Add To Cart",
//         btn2: "Buy Now",
//       },
//     ];
//     return (
//       <>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-md-12">
//               <h1 className=" text-center p-2 mb-2 fw-bold  text-warning">Ecommerse App</h1>
//             </div>
// {/* ********************************************** */}
//      <div className="col-md-12 text-center bg-dark p-3" >
//      <button className="btn btn-secondary px-4 fw-bold my-3" onClick={()=>this.Handle_All_Products()}>All Product</button>
//       <button className="btn btn-danger px-4 mx-4 fw-bold my-3" onClick={()=>this.Electronic_prod()}>Electronic Product</button>
//       <button className="btn btn-primary px-4 fw-bold my-3" onClick={()=>this.Handle_Other_Prod()}>Other Product</button>
//      </div>

// {/* ********************************************** */}

//             <div className="col-md-12">
//               <div className="row">
                
//                 {
//                   this.state.elect_data ?
               
//                 Elect_Prod.map((val,index,array) => {
//                   return (
//                     <div className="col-md-3" key={val.id}>
//                       <Products
//                         name={val.name}
//                         img={val.img}
//                         btn1={val.btn1}
//                         btn2={val.btn2}
//                       />
//                     </div>

//                     // **************************

//                     // other product
//                   );
//                 }):null
//                 }
              

// {
//     this.state.other_prod &&
//                       Other_Products.map((val)=>{
//                       return(
                        
//                         <div className="col-md-3" key={val.id}>
//                         <Products
//                         name={val.name}
//                         img={val.img}
//                         btn1={val.btn1}
//                         btn2={val.btn2}
//                       />
//                         </div>
                        
//                       )
//                     })

//                     }
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }



//********** */
// import React, { Component } from "react";
// import Products from "./Products";

// export default class App extends Component {

//   constructor() {
//     super()
    
//     this.state = {
//       elect_data: true,
//       other_prod: true,
//       products: [], // Initialize products state to hold fetched data
//       filteredProducts: [], // Add a state to hold filtered products
//     }
//   }

//   componentDidMount() {
//     // Fetch data from API when component mounts
//     fetch("https://dummyjson.com/products")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ products: data.products, filteredProducts: data.products }); // Update products state with API data
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }

//   // Filter electronics products
//   Electronic_prod = () => {
//     const filteredProducts = this.state.products.filter(product => product.category === 'electronics');
//     this.setState({
//       elect_data: true,
//       other_prod: false,
//       filteredProducts
//     });
//   }

//   // Filter other products
//   Handle_Other_Prod = () => {
//     const filteredProducts = this.state.products.filter(product => product.category !== 'electronics');
//     this.setState({
//       elect_data: false,
//       other_prod: true,
//       filteredProducts
//     });
//   }

//   // Show all products
//   Handle_All_Products = () => {
//     this.setState({
//       elect_data: true,
//       other_prod: true,
//       filteredProducts: this.state.products
//     });
//   }

//   render() {
//     return (
//       <>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-md-12">
//               <h1 className=" text-center p-2 mb-2 fw-bold  text-warning">Ecommerse App</h1>
//             </div>
//             {/* ********************************************** */}
//             <div className="col-md-12 text-center bg-dark p-3">
//               <button className="btn btn-secondary px-4 fw-bold my-3" onClick={() => this.Handle_All_Products()}>All Product</button>
//               <button className="btn btn-danger px-4 mx-4 fw-bold my-3" onClick={() => this.Electronic_prod()}>Electronic Product</button>
//               <button className="btn btn-primary px-4 fw-bold my-3" onClick={() => this.Handle_Other_Prod()}>Other Product</button>
//             </div>
//             {/* ********************************************** */}
//             <div className="col-md-12">
//               <div className="row">
//                 {
//                   this.state.filteredProducts.map((val, index) => {
//                     return (
//                       <div className="col-md-3" key={val.id}>
//                         <Products
//                           name={val.title}
//                           img={val.thumbnail}
//                           btn1="Add To Cart"
//                           btn2="Buy Now"
//                         />
//                       </div>
//                     );
//                   })
//                 }
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }


//??
// import React, { Component } from "react";
// import Products from "./Products";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       elect_data: true,
//       other_prod: true,
//       products: [], // Initialize products state to hold fetched data
//       filteredProducts: [], // Add a state to hold filtered products
//     };
//   }

//   componentDidMount() {
//     // Fetch data from API when component mounts
//     fetch("https://dummyjson.com/products")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ products: data.products, filteredProducts: data.products }); // Update products state with API data
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }

//   // Filter electronics products
//   Electronic_prod = () => {
//     const filteredProducts = this.state.products.filter(
//       (product) => product.category === "smartphones" || product.category === "laptops"
//     );
//     this.setState({
//       elect_data: true,
//       other_prod: false,
//       filteredProducts,
//     });
//   };

//   // Filter other products
//   Handle_Other_Prod = () => {
//     const filteredProducts = this.state.products.filter(
//       (product) => product.category !== "smartphones" && product.category !== "laptops"
//     );
//     this.setState({
//       elect_data: false,
//       other_prod: true,
//       filteredProducts,
//     });
//   };

//   // Show all products
//   Handle_All_Products = () => {
//     this.setState({
//       elect_data: true,
//       other_prod: true,
//       filteredProducts: this.state.products,
//     });
//   };

//   render() {
//     return (
//       <>
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-md-12">
//               <h1 className=" text-center p-2 mb-2 fw-bold text-warning bg-dark">Ecommerce App</h1>
//             </div>
//             {/* ********************************************** */}
//             {/* <div className="col-md-12 text-center bg-dark p-3">
//               <button
//                 className="btn btn-secondary px-4 fw-bold my-3"
//                 onClick={this.Handle_All_Products}
//               >
//                 All Products
//               </button>
//               <button
//                 className="btn btn-danger px-4 mx-4 fw-bold my-3"
//                 onClick={this.Electronic_prod}
//               >
//                 Electronic Products
//               </button>
//               <button
//                 className="btn btn-primary px-4 fw-bold my-3"
//                 onClick={this.Handle_Other_Prod}
//               >
//                 Other Products
//               </button>
//             </div> */}
//             {/* ********************************************** */}
//             <div className="col-md-12">
//               <div className="row">
//                 {this.state.filteredProducts.map((val) => {
//                   return (
//                     <div className="col-md-3" key={val.id}>
//                       <Products
//                         name={val.title}
//                         img={val.thumbnail}
//                         btn1="Add To Cart"
//                         btn2="Buy Now"
//                       />
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           </div>
//         </div>
//       </>
//     );
//   }
// }


//?


// import React, { Component } from "react";
// import Products from "./Products";

// export default class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       products: [], // Initialize products state to hold fetched data
//     };
//   }

//   componentDidMount() {
//     // Fetch data from API when component mounts
//     fetch("https://dummyjson.com/products")
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ products: data.products }); // Update products state with API data
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }

//   render() {
//     return (
//       <>
//         <div className="container">
//           <h1 className="text-center my-4">Product List</h1>
//           <div className="row">
//             {this.state.products.map((product) => (
//               <div className="col-md-4 mb-4" key={product.id}>
//                 <Products
//                   title={product.title}
//                   description={product.description}
//                   category={product.category}
//                   price={product.price}
//                   images={product.images}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </>
//     );
//   }
// }
