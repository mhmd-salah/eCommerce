import { GridList, Heading } from '@components/common';
import Product from '@components/eCommerce/Product/Product';
import { Loading } from '@components/feedback';
import { TProduct } from '@customTypes/product';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { actGetWishlist } from '@store/wishlist/wishlistSlice';
import { useEffect } from 'react';

const Wishlist = () => {
  const dispatch = useAppDispatch();
  const { loading, error, productsFullInfo } = useAppSelector(
    (state) => state.wishlist
  );
  const cartItems = useAppSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(actGetWishlist());
  }, [dispatch]);

  const records = productsFullInfo.map((el) => ({
    ...el,
    quantity: cartItems[el.id],
    isLiked: true,
  }));
  return (
    <div>
      <Heading>Wishlist</Heading>
      <Loading status={loading} error={error}>
        <GridList<TProduct>
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </div>
  );
};

export default Wishlist;
