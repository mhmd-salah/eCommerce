import { TProduct } from '@customTypes/product';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '@store/index';
import axios from 'axios';
import axiosInstance from 'src/api/axios.config';

type TResponse = TProduct[];

const actGetProductsByItems = createAsyncThunk(
  'cart/actGetProductsByItems',
  async (_, thunkApi) => {
    const { rejectWithValue, getState } = thunkApi;
    const { cart } = getState() as RootState;
    console.log(cart.items);

    const itemsId = Object.keys(cart.items);
    const concatenatedItemsId = itemsId.map((el) => `id=${el}`).join('&');
    try {
      const response = await axiosInstance.get<TResponse>(
        `/products?${concatenatedItemsId}`
      );
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data.message || err.message);
      } else {
        rejectWithValue('An unexpected error');
      }
    }
  }
);

export default actGetProductsByItems;
