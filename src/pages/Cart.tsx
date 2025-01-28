import Heading from '@components/common/Heading/Heading';
import { CartItemList, CartSubtotalPrice } from '@components/eCommerce';
import { Loading } from '@components/feedback';
import {
  actGetProductsByItems,
  cartItemChangeQuantity,
} from '@store/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, productsFullInfo, loading, error } = useAppSelector(
    (state) => state.cart
  );
  useEffect(() => {
    dispatch(actGetProductsByItems());
  }, [dispatch]);

  const products = productsFullInfo.map((el) => ({
    ...el,
    quantity: items[el.id],
  }));

  const changeQuantityHandler = (id: number, quantity: number) => {
    dispatch(cartItemChangeQuantity({ id, quantity }));
  };

  return (
    <div>
      <Loading status={loading} error={error}>
        <Heading>Cart</Heading>
        <CartItemList
          products={products}
          changeQuantityHandler={changeQuantityHandler}
        />
        <CartSubtotalPrice />
      </Loading>
    </div>
  );
};

export default Cart;
