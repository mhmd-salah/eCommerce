import api from "@api";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


type TResponse = {id:number,title:string,prefix:string,img:string}


const actGetCategories = createAsyncThunk(
  "categories/actGetCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = api.get<TResponse[]>("/categories");
      return response;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data.message || err.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export default actGetCategories;
