import api from "@api";
import type { TProduct } from "@customTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type TResponse = TProduct[] | undefined;

const actGetProductsByCatPrefix = createAsyncThunk(
  "products/actGetProducts",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await api.get<TResponse>(
        `/products?cat_prefix=${prefix}`
      );
      return response?.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data.message || err.message);
      } else {
        rejectWithValue("An unexpected error");
      }
    }
  }
);

export default actGetProductsByCatPrefix;
