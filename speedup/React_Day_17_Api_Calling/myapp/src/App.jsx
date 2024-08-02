import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  //       useEffect(()=>{
  //           //Api CAlling

  // fetch('http://localhost:3000/User')
  // .then((result)=>result.json()
  //   .then((res)=>console.log(res)))
  //       },[])

  useEffect(() => {
    fetch("http://localhost:3000/User").then((result) =>
      result.json().then((res) => {
        // console.log(res);
        setData(res);
      })
    );
  },[]);
  console.log(data);
  return (
    <>
      <h1 className="text-center fw-bold my-4">
        Api Calling in stateless functional component
      </h1>
      <h1 className="text-center bg-dark p-3 my-3 text-light">User Records</h1>

      <table className="table table-border table-striped table-hover text-center fw-bold  table-light">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
          </tr>
        </thead>

        <tbody>
          {data.map((val, index) => {
            return (
              <tr key={index}>
                <td>{val.id}</td>
                <td>{val.email}</td>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default App;
