import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from 'src/api/axios.config';

const actLikeToggle = createAsyncThunk(
  'wishlist/actLikeToggle',
  async (id: number, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const isRecordExist = await axiosInstance.get(
        `/wishlist?userId=1&productId=${id}`
      );

      if (isRecordExist.data.length > 0) {
        await axiosInstance.delete(`/wishlist/${isRecordExist.data[0].id}`);
        return { type: 'remove', id };
      } else {
        await axiosInstance.post('/wishlist', { userId: '1', productId: id });
        return { type: 'add', id };
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        return rejectWithValue(err.response?.data.message || err.message);
      } else {
        return rejectWithValue('an unexpected error');
      }
    }
  }
);

export default actLikeToggle;
