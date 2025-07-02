import { GridList } from "@components/common";
import Product from "@components/eCommerce/Product.tsx/Product";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useAppDispatch();
  const { loading, records, error } = useAppSelector((state) => state.products);
  const params = useParams();
  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix + ""));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <GridList
        records={records}
        renderItem={(record) => <Product {...record} />}
      />
    </Container>
  );
};

export default Products;
