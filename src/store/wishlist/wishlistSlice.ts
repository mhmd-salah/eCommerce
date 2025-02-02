import { createSlice } from '@reduxjs/toolkit';

interface IWishlistState {
  itemsId: number[];
}

const initialState: IWishlistState = {
  itemsId: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {},
});

export default wishlistSlice.reducer;
