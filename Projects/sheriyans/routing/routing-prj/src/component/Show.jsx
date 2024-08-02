import React, { useState } from "react";
import axios from "axios";
const Show = () => {
  const [products, setProducts] = useState([]);
  const getproduct = () => {
    const api = "https://fakestoreapi.com/products";

    axios
      .get(api)
      .then((products) => {
        console.log(products);
        setProducts(products.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <button onClick={getproduct} className="rounded px-5 py-2 bg-red-300">
        Call Product Api
      </button>
      <hr />
      <ul>
        {products.length > 0 ? (
          products.map((p) => (
            <li key={p.id} className="rounded mb-2  p-5 bg-red-200">
              {p.title}
            </li>
          ))
        ) : (
          <h1>Loading ...</h1>
        )}
      </ul>
    </>
  );
};

export default Show;
