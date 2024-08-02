import {createSlice} from "@reduxjs/toolkit"

export const counterSlice=createSlice({
  name:"counter",
  initialState:0,

  reducers:{
    incremment:(state)=>{
      return state+1
    },

    decremment:(state)=>{
      return state-1
    },

    incAmount:(state,action)=>{
      return state+action.payload;
    },
    
  }
});

export const {incremment,decremment,incAmount}=counterSlice.actions 
export default counterSlice.reducer