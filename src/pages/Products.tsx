import { GridList, Heading } from "@components/common";
import Product from "@components/eCommerce/Product.tsx/Product";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useAppDispatch();
  const { loading, records, error } = useAppSelector((state) => state.products);
  const params = useParams();
  const cartItems = useAppSelector((state) => state.cart.items);

  const productsFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
  }));

  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix + ""));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Heading>
        <span className="text-capitalize">{params.prefix}</span> - Products
      </Heading>
      <GridList
        records={productsFullInfo}
        renderItem={(record) => <Product {...record} />}
      />
    </Container>
  );
};

export default Products;
