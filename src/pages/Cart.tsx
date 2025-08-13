import { Heading } from "@components/common";
import { CartItemsList, CartSubtotalPrice } from "@components/eCommerce";
import {
  actGetProductsByItems,
  cartItemChangeQuantity,
  cartItemRemove,
} from "@store/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useCallback, useEffect } from "react";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { loading, productFullInfo, items, error } = useAppSelector(
    (state) => state.cart
  );
  useEffect(() => {
    dispatch(actGetProductsByItems());
  }, [dispatch]);

  const products = productFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  const changeQuantityHandler = useCallback(
    (id: number, quantity: number) => {
      dispatch(cartItemChangeQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const removeItemHandler = useCallback(
    (id: number) => {
      dispatch(cartItemRemove(id));
    },
    [dispatch]
  );

  return (
    <>
      <Heading>Cart</Heading>
      <CartItemsList
        products={products}
        changeQuantityHandler={changeQuantityHandler}
        removeItemHandler={removeItemHandler}
      />
      <CartSubtotalPrice />
    </>
  );
};

export default Cart;
