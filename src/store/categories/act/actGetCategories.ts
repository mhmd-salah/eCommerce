import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.get("http://localhost:5005/categories");
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      }else{
        return rejectWithValue("An unexpected error" )
      }
    }
  }
);

export default actGetCategories;
console.log("hello mohamed ")