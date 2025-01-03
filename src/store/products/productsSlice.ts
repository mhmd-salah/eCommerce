import { createSlice } from "@reduxjs/toolkit";
import actGetProductsByCatPrefix from "./act/actGetProductsByCatPrefix";
import { TProduct } from "@customTypes/product";
import { TLoading } from "@customTypes/index";


interface IProductsState {
  records:TProduct[];
  loading:TLoading;
  error:string|null
}

const initialState:IProductsState = {
  records:[],
  loading:"idle",
  error:null
}


const productsSlice = createSlice({
  name:"products",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(actGetProductsByCatPrefix.pending, (state)=>{
      state.loading = "pending"
      state.error =null
    });
    builder.addCase(actGetProductsByCatPrefix.fulfilled, (state,action)=>{
      state.loading = "success"
      state.records = action.payload
    })
    builder.addCase(actGetProductsByCatPrefix.rejected, (state, action)=>{
      state.loading = "failed"
      if(action.payload && typeof action.payload == "string"){
        state.error = action.payload
      }
    })
  }
})
export {actGetProductsByCatPrefix}
export default productsSlice.reducer