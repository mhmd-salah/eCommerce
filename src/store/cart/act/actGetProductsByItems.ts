import { createAsyncThunk } from "@reduxjs/toolkit";
import {fetchProductsByIds} from "@services";
import type { RootState } from "@store/index";
import axios from "axios";

const actGetProductsByItems = createAsyncThunk(
  "cart/actGetProductsByItems",
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;

    const { cart } = getState() as RootState;
    const itemsId = Object.keys(cart.items);

    if (!itemsId.length) return fulfillWithValue([]);

    try {
      const {data} = await fetchProductsByIds(itemsId);
      return fulfillWithValue(data);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue("an unexpected error");
      }
    }
  }
);

export default actGetProductsByItems;
