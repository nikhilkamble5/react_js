
import { configureStore } from "@reduxjs/toolkit"
import counter from "./couterSlice"
export const appStore =configureStore({

  reducer:{
    count: counter
  }
})