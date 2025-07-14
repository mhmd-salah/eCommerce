import { GridList, Heading } from "@components/common";
import { Category } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { actGetCategories } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";

const Categories = () => {
  const dispatch = useAppDispatch();
  const hasFetchedRef = useRef(false);
  const { loading, error, records } = useAppSelector(
    (state) => state.categories
  );

  useEffect(() => {
    if (!hasFetchedRef.current && records.length === 0) {
      hasFetchedRef.current = true;
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);
  if (loading) console.log("loading");
  if (error) console.log(error);

  return (
    <Container>
      <Heading>Categories</Heading>
      <Loading error={error} status={loading}>
        <GridList
          records={records}
          renderItem={(record) => <Category {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Categories;
