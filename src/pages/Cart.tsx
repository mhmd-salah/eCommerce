import Heading from '@components/common/Heading/Heading';
import { CartItem, CartSubtotalPrice } from '@components/eCommerce';
import { Loading } from '@components/feedback';
import { actGetProductsByItems } from '@store/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.cart);
  useEffect(() => {
    dispatch(actGetProductsByItems());
  }, [dispatch]);
  return (
    <div>
      <Loading status={loading} error={error}>
        <Heading>Cart</Heading>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartSubtotalPrice />
      </Loading>
    </div>
  );
};

export default Cart;
