import { TProduct } from '@customTypes/product';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/index';
import axios from 'axios';
import axiosInstance from 'src/api/axios.config';

type TResponse = TProduct[];

const actGetProductsByItems = createAsyncThunk(
  'cart/actGetProductsByItems',
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue, getState } = thunkAPI;
    const { cart } = getState() as RootState;
    const itemsId = Object.keys(cart.items);

    if (!itemsId.length) {
      return fulfillWithValue([]);
    }
    try {
      const concatenatedItemsId = itemsId.map((el) => `id=${el}`).join('&');
      const response = await axiosInstance.get<TResponse>(
        `/products?${concatenatedItemsId}`
      );
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return rejectWithValue(error.response?.data.message || error.message);
      } else {
        return rejectWithValue('An unexpected error');
      }
    }
  }
);

export default actGetProductsByItems;
