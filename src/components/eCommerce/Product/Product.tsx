import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@customTypes/product";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import useDebounce from "@hooks/useDebounce";
import { memo, useCallback } from "react";
const { product, productImg } = styles;

const Product = ({
  id,
  title,
  price,
  img,
  max,
  quantity,
}: Omit<TProduct, "cat_prefix">) => {
  const dispatch = useAppDispatch();
  const [isBtnDisabled, setIsBtnDisabled] = useDebounce(false, 300);
  const currentRemainingQuantity = max - (quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

  const addToCartHandler = useCallback(() => {
    dispatch(addToCart(id));
    setIsBtnDisabled(true);
  }, [dispatch, id, setIsBtnDisabled]);
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt="" />
      </div>
      <h2>{title}</h2>
      <h3>{price} EG</h3>
      <p>
        Quantity:{" "}
        {!quantityReachedToMax ? currentRemainingQuantity : "Reached limit"}
      </p>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
        disabled={isBtnDisabled || quantityReachedToMax}
      >
        {isBtnDisabled ? (
          <>
            Loading &nbsp;
            <Spinner animation="border" size="sm" />
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
};

export default memo(Product);
