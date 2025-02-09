import { createSlice } from '@reduxjs/toolkit';
import actLikeToggle from './act/actLikeToggle';
import actGetWishlist from './act/actGetWishlist';
import { TLoading } from '@customTypes/index';
import { TProduct } from '@customTypes/product';
interface IWishlistState {
  itemsId: number[];
  productsFullInfo: TProduct[];
  error: string | null;
  loading: TLoading;
}

const initialState: IWishlistState = {
  itemsId: [],
  productsFullInfo: [],
  error: null,
  loading: 'idle',
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actLikeToggle.pending, (state) => {
      state.error;
    });
    builder.addCase(actLikeToggle.fulfilled, (state, action) => {
      if (action.payload.type === 'add') {
        state.itemsId.push(action.payload.id);
      } else {
        state.itemsId = state.itemsId.filter((el) => el !== action.payload.id);
      }
    });
    builder.addCase(actLikeToggle.rejected, (state, action) => {
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
    // get wishlist items
    builder.addCase(actGetWishlist.pending, (state) => {
      state.loading = 'pending';
      state.error;
    });
    builder.addCase(actGetWishlist.fulfilled, (state, action) => {
      state.loading = 'success';
      state.productsFullInfo = action.payload;
    });
    builder.addCase(actGetWishlist.rejected, (state, action) => {
      state.loading = 'failed';
      if (action.payload && typeof action.payload === 'string') {
        state.error = action.payload;
      }
    });
  },
});

export { actLikeToggle, actGetWishlist };
export default wishlistSlice.reducer;
