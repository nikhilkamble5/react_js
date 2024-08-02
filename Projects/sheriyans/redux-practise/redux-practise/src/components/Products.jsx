import React, { useEffect } from "react";
// import { getproducts } from "../store/reducers/ProductReducers";
import { useDispatch, useSelector } from "react-redux";
import { asyncgetproducts } from "../store/actions/ProductActions";
const Products = () => {
  const { products } = useSelector((state) => state.ProductReducer); // Ensure the correct state slice is used
  // console.log(products);
  // const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the async action to fetch products when component mounts
    dispatch(asyncgetproducts());
  }, []);
  return (
    <div className="m-auto container mt-5 bg-red-100 p-10">
      <h1 className="text-2xl font-bold text-red-900">User List</h1>
      <ul>
        <li>Hello</li>
      </ul>
    </div>
  );
};

export default Products;
