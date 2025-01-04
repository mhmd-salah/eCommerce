import { GridList } from "@components/common";
import Product from "@components/eCommerce/Product/Product";
import { Loading } from "@components/feedback";
import { productsCleanUp } from "@store/categories/categoriesSlice";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetProductsByCatPrefix } from "@store/products/productsSlice";
import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Products = () => {
  const dispatch = useAppDispatch();
  const params = useParams();
  const { loading, records, error } = useAppSelector((state) => state.products);
  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));
    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList
          records={records}
          renderItem={(record) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
};

export default Products;
