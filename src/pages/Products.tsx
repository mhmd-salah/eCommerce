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

  const productsList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={3}
            key={record.id}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Product {...record} />
          </Col>
        ))
      : null;

  return (
    <Container>
      <Row>{productsList}</Row>
    </Container>
  );
};

export default Products;
