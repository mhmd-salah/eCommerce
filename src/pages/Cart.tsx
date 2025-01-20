import Heading from '@components/common/Heading/Heading';
import { CartItem, CartSubtotalPrice } from '@components/eCommerce';
import { actGetProductsByItems } from '@store/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useEffect } from 'react';

const Cart = () => {
  const dispatch = useAppDispatch()
  const {items} = useAppSelector(state=>state.cart)
  useEffect(() => {
    dispatch(actGetProductsByItems())
  }, [dispatch]);
  return (
    <div>
      <Heading>Cart</Heading>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartSubtotalPrice />
    </div>
  );
};

export default Cart;
