import { TProduct } from "@customTypes/product";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

interface ICartState {
  items: { [key: number]: number };
  productFullInfo: TProduct[];
}

const initialState: ICartState = {
  items: {},
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
  },
});

const getCatTotalQuantity = (state: RootState) => {
  return Object.values(state.cart.items).reduce(
    (acc: number, quantity: number) => acc + quantity,
    0
  );
};

export { getCatTotalQuantity };
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
