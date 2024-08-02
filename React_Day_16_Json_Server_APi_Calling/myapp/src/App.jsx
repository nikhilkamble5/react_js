import React, { useEffect, useState } from "react";

const App = () => {
  // useEffect(()=>{
  //   fetch('http://localhost:3000/Products')
  //   .then((result)=>result.json()
  //   .then((res)=>console.log(res)))

  // },[])
  //

  //state defined
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/Products").then((result) =>
    // fetch("https://jsonplaceholder.typicode.com/photos").then((result) =>
      result.json().then((res) => {
        console.log(res);
        setData(res);
      })
    );
  }, []);
  console.log(data);
  return (
    <>
      {/* Api calling */}

      {/* fetch to call Api */}

      {/* then */}

      <h1>Api calling in foc</h1>

      <table className='table table-border hover table-striped table-responsive'>
      <thead>
        <tr >
          <th>ID</th>
          <th>P_ID</th>
          <th>Product Name</th>
          <th>Product Price</th>
          <th>Product Description</th>

        </tr>
      </thead>

      <tbody>
      {
        data.map((val,index)=>{
          return(
            <tr key={val.id || index}>
            <td>{val.id}</td>
            <td>{val.p_id}</td>
            <td>{val.p_name}</td>
            <td>{val.p_price}</td>
            <td>{val.p_desc}</td>
            </tr>
          )
        })
      }
        
      </tbody>
      </table>
    </>
  );
};

export default App;
