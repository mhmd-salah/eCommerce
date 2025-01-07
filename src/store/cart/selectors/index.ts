import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/index";

const getCatTotalQuantitySelector = createSelector(
  (state: RootState) => state.cart.items,
  (items) => {
    console.log("fire");
    return Object.values(items).reduce(
      (acc: number, quantity: number) => acc + quantity,
      0
    );
  }
);

export { getCatTotalQuantitySelector };
