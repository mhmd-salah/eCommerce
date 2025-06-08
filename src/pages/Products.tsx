import Product from "@components/eCommerce/Product.tsx/Product";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProductsByCatPrefix } from "@store/products/productsSlice";
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useAppDispatch();
  const { loading, records, error } = useAppSelector((state) => state.products);
  const params = useParams();
  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix + ""));
  }, [dispatch, params]);

  return (
    <Container>
      <Row>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
        <Col xs={6} md={3} className="d-flex justify-content-center mb-5 mt-2">
          <Product />
        </Col>
      </Row>
    </Container>
  );
};

export default Products;
