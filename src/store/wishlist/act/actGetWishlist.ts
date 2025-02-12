import { TProduct } from '@customTypes/product';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from 'src/api/axios.config';

type TResponse = TProduct[];

const actGetWishlist = createAsyncThunk(
  'wishlist/actGetWishlist',
  async (_, thunkAPI) => {
    const { rejectWithValue, fulfillWithValue } = thunkAPI;

    try {
      const userWishlist = await axiosInstance.get<{ productId: number }[]>(
        '/wishlist?userId=1'
      );

      if (!userWishlist.data.length) {
        return fulfillWithValue([]);
      }
      const concatenatedItemsId = userWishlist.data
        .map((el) => `id=${el.productId}`)
        .join('&');
      const response = await axiosInstance.get<TResponse>(
        `/products?${concatenatedItemsId}`
      );
      return response.data;
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data.message || err.message);
      } else {
        return rejectWithValue('An unexpected error');
      }
    }
  }
);

export default actGetWishlist;
