import axios from "axios";
import { getproducts } from "../reducers/ProductReducers";
export const asyncgetproducts = () => async (dispatch, getstate) => {
  console.log(getstate());
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);

    dispatch(getproducts(response.data));
    getproducts();
  } catch (error) {}
};
