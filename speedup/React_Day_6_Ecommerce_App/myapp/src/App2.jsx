import React from "react";
import Products from "./Products";
import App3 from "./App3";


const Data =[
  {
    id:1,
    name:'Laptop',
    img:'assets/i1.jpg',
    btn1:'Add To cart',
    btn2:'Buy Now'
  },

  {
    id:2,
    name:'Laptop',
    img:'assets/a1.webp',
    btn1:'Add To cart',
    btn2:'Buy Now'
  },
  {
    id:3,
    name:'fruits',
    img:'assets/f2.webp',
    btn1:'Add To cart',
    btn2:'Buy Now'
  },

  {
    id:4,
    name:'fruits',
    img:'assets/j1.webp',
    btn1:'Add To cart',
    btn2:'Buy Now'
  },

  {
    id:3,
    name:'fruits',
    img:'assets/f2.webp',
    btn1:'Add To cart',
    btn2:'Buy Now'
  },

  {
    id:3,
    name:'Laptop',
    img:'assets/l1.webp',
    btn1:'Add To cart',
    btn2:'Buy Now'
  },
  
]
const App2 = () => {
  return (
    <>
      <h1 className=" text-center bg-dark text-warning p-4 ">Ecommerse App</h1>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            {/* nested grid */}

            {/* **************************************************************** */}
            
            {/*  */}

            
        {/* <div className="row">
          <Products 
          name={Data[0].name}
          img={Data[0].img}
          btn1={Data[0].btn1}
          btn2={Data[0].btn2}/>
        </div> */}


{/* Map Method  3 parameter gheto value index array*/}
        <div className="row">
          {
            Data.map((val)=>{
                return(
                  <>
                  <div className="col-md-3">
                  <Products
                    name={val.name}
                    img={val.img}
                    btn1={val.btn1}
                    btn2={val.btn2}
                  />
                  </div> 
                  </>
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

export default App2;
