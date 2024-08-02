import { configureStore } from "@reduxjs/toolkit";
import UserReducers  from "./reducers/UserReducers";

import ProductReducers from "./reducers/ProductReducers"
export const store = configureStore({
  
  reducer:{
    UserReducers:UserReducers,
    ProductReducers:ProductReducers,
  }
});
