import { Category } from "@components/eCommerce";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect, useRef } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Categories = () => {
  const dispatch = useAppDispatch();
  const hasFetchedRef = useRef(false);
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!hasFetchedRef.current && records.length === 0) {
      hasFetchedRef.current = true
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);
  if (loading) console.log("loading");
  if (error) console.log(error);
  const categoriesList =
    records.length > 0
      ? records.map((record) => {
          return (
            <Col
              key={record.id}
              xs={6}
              md={3}
              className="d-flex justify-content-center mb-5 mt-2"
            >
              <Category {...record} />
            </Col>
          );
        })
      : "there are not categories";
  return (
    <Container>
      <Row>{categoriesList}</Row>
    </Container>
  );
};

export default Categories;
