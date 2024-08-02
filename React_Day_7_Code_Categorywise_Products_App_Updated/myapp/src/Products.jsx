// import React from "react";
// const Products =(props)=>{

//   //object Destructuring

//   const{name,img,btn1,btn2}=props;

//   return(
//     <>
//     <div className="card">
//                 <div className="card-header">
//                   <h1 className='text-center text-dark'>{name}</h1>
//                 </div>
//                 <div className="card-body p-3 text-center">
                 
//                   <img src={img}className='img-fluid' alt="" style={{height:"300px"}}/>

//                 </div>
//                 <div className="card-footer text-center">
//                 <button className='btn btn-danger px-4 fw-bold mx-2 btn-sm'>{btn1} </button>
//                   <button className='btn btn-outline-primary px-4 fw-bold mx-2 btn-sm'>{btn2} </button>
                 
//                 </div>
//               </div>
//     </>
//   )
// }

// export default Products

//************ */

// import React from "react";

// const Products = (props) => {

//   //object Destructuring
//   const { name, img, btn1, btn2 } = props;

//   return (
//     <>
//       <div className="card">
//         <div className="card-header">
//           <h1 className='text-center text-dark'>{name}</h1>
//         </div>
//         <div className="card-body p-3 text-center">
//           <img src={img} className='img-fluid' alt="" style={{ height: "300px" }} />
//         </div>
//         <div className="card-footer text-center">
//           <button className='btn btn-danger px-4 fw-bold mx-2 btn-sm'>{btn1}</button>
//           <button className='btn btn-outline-primary px-4 fw-bold mx-2 btn-sm'>{btn2}</button>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Products;


//00000000000


//?
// import React from "react";

// const Products = (props) => {
//   // Object Destructuring
//   const { name, img, btn1, btn2 } = props;

//   return (
//     <>
//       <div className="card">
//         <div className="card-header">
//           <h1 className="text-center text-dark">{name}</h1>
//         </div>
//         <div className="card-body p-3 text-center">
//           <img src={img} className="img-fluid" alt="" style={{ height: "300px" }} />
//         </div>
//         <div className="card-footer text-center">
//           <button className="btn btn-danger px-4 fw-bold mx-2 btn-sm">{btn1}</button>
//           <button className="btn btn-outline-primary px-4 fw-bold mx-2 btn-sm">{btn2}</button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Products;


//?


import React from "react";

const Products = ({ title, description, category, price, images }) => {
  return (
    <div className="card">
      <img src={images[0]} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">Category: {category}</small>
        </p>
        <p className="card-text">Price: ${price}</p>
        <a href="#" className="btn btn-primary">
          View Details
        </a>
      </div>
    </div>
  );
};

export default Products;
