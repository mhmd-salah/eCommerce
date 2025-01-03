import { TCategory } from "@customTypes/category";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "src/api/axios.config";

type TResponse = TCategory[];

const actGetCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axiosInstance.get<TResponse>("/categories");
      const data = response.data;
      return data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message);
      } else {
        return rejectWithValue("An unexpected error");
      }
    }
  }
);

export default actGetCategories;
