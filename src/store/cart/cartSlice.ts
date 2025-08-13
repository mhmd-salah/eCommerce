import type { TLoading, TProduct } from "@customTypes";
import { getCartTotalQuantitySelector } from "./selectors";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import actGetProductsByItems from "./act/actGetProductsByItems";

interface ICart {
  items: { [key: number]: number };
  productFullInfo: TProduct[];
  loading: TLoading;
  error: null | string;
}

const initialState: ICart = {
  items: {},
  productFullInfo: [],
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
    cartItemChangeQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
    },
    cartItemRemove: (state, action) => {
      delete state.items[action.payload];
      state.productFullInfo = state.productFullInfo.filter(
        (el) => el.id !== action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetProductsByItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetProductsByItems.fulfilled, (state, action) => {
      state.loading = "success";
      state.productFullInfo = action.payload;
    });
    builder.addCase(actGetProductsByItems.rejected, (state, action) => {
      if (action.payload && typeof action.payload === "string") {
        state.error = action.payload;
      }
      state.loading = "failed";
    });
  },
});

export { getCartTotalQuantitySelector, actGetProductsByItems };
export const { addToCart, cartItemChangeQuantity, cartItemRemove } =
  cartSlice.actions;
export default cartSlice.reducer;
