import type { TLoading, TProduct } from "@customTypes";
import actGetProductsByItems from "./act/actGetProductsByItems";
import { getCartTotalQuantitySelector } from "./selectors";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ICart {
  items: { [key: number]: number };
  productsFullInfo: TProduct[];
  loading: TLoading;
  error: null | string;
}

const initialState: ICart = {
  items: {},
  productsFullInfo: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.items[id] = (state.items[id] || 0) + 1;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
      state.loading = "success";
      state.productsFullInfo = action.payload;
    });
    builder.addCase(actGetProductsByItems.rejected, (state, action) => {
      state.loading = "failed";
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
    });
  },
});

export { getCartTotalQuantitySelector, actGetProductsByItems };
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
