import Category from "@components/eCommerce/Category/Category";
import { Col, Container, Row } from "react-bootstrap";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useEffect } from "react";

const Categories = () => {
  const dispatch = useAppDispatch();
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );
  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch,records]);
  const categoriesList =
    records.length > 0
      ? records.map((record) => (
          <Col
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
            key={record.id}
          >
            <Category {...record} />
          </Col>
        ))
      : "there are no categories";
  return (
    <Container>
      <Row>{categoriesList}</Row>
    </Container>
  );
};

export default Categories;
