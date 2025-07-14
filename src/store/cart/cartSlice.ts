import type { TProduct } from "@customTypes";
import { getCartTotalQuantitySelector } from "./selectors";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ICart {
  items: { [key: number]: number };
  productFullInfo: TProduct[];
}

const initialState: ICart = {
  items: {},
  productFullInfo: [],
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
});

export { getCartTotalQuantitySelector };
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
