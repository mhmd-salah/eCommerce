import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "@store/index";

const selectCart = (state: RootState): { [key: number]: number } =>
  state.cart.items;
const getCartTotalQuantitySelector = createSelector([selectCart], (items) => {
  console.log("fire");
  const totalQuantity = Object.values(items).reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return totalQuantity;
});

export { getCartTotalQuantitySelector };
