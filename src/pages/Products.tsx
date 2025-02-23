import { GridList, Heading } from '@components/common';
import Product from '@components/eCommerce/Product/Product';
import { Loading } from '@components/feedback';
import { useAppDispatch, useAppSelector } from '@store/hooks';
import { actGetProductsByCatPrefix, cleanUpProductsRecords } from '@store/products/productsSlice';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const Products = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { loading, records, error } = useAppSelector((state) => state.products);
  const cartItems = useAppSelector((state) => state.cart.items);
  const wishlistItemsId = useAppSelector((state) => state.wishlist.itemsId);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
    isLiked: wishlistItemsId.includes(el.id),
  }));
  console.log('product full', productsFullInfo);
  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(cleanUpProductsRecords());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <Heading>Products - {params.prefix}</Heading>
        <GridList
          records={productsFullInfo}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
