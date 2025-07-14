import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import type { TProduct } from "@customTypes";
import { useAppDispatch } from "@store/hooks";
import { addToCart } from "@store/cart/cartSlice";
import { memo, useEffect, useState } from "react";
const { product, productImg, maximumNotice } = styles;

const Product = ({ id, img, title, price, max, quantity }: TProduct) => {
  console.log("product fire");
  const dispatch = useAppDispatch();

  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const currentRemainingQuantity = max - (quantity ?? 0);

  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;

  useEffect(() => {
    if (!isBtnDisabled) return;
    setIsBtnDisabled(true);

    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);
    return () => {
      clearTimeout(debounce);
    };
  }, [isBtnDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsBtnDisabled(true);
  };
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price.toFixed(2)} EGP</h3>
      <p className={maximumNotice}>
        {currentRemainingQuantity
          ? "you reached to the limit"
          : `you can add ${currentRemainingQuantity} items`}
      </p>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
        disabled={isBtnDisabled || quantityReachedToMax}
      >
        {isBtnDisabled ? (
          <>
            <Spinner animation="border" size="sm" />
            Loading...
          </>
        ) : (
          "Add to cart"
        )}
      </Button>
    </div>
  );
};

export default memo(Product);
