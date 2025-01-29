import Heading from '@components/common/Heading/Heading';
import { CartItemList, CartSubtotalPrice } from '@components/eCommerce';
import { Loading } from '@components/feedback';
import {
  actGetProductsByItems,
  cartItemChangeQuantity,
  cartItemRemove,
} from '@store/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { useCallback, useEffect } from 'react';

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
  console.log(productsFullInfo, 'dsf');
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
    <div>
      <Loading status={loading} error={error}>
        <Heading>Cart</Heading>
        {products.length ? (
          <>
            <CartItemList
              products={products}
              changeQuantityHandler={changeQuantityHandler}
              removeItemHandler={removeItemHandler}
            />
            <CartSubtotalPrice products={products} />
          </>
        ) : (
          'your cart is empty'
        )}
      </Loading>
    </div>
  );
};

export default Cart;
