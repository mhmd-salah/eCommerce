import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@customTypes/product";
import { useAppDispatch } from "@store/hooks";
import useDebounce from "@hooks/useDebounce";
import { memo, useCallback, useRef } from "react";
import { AddToCartCommand } from "src/commands/AddToCartCommand";
import { ButtonInvoker } from "src/commands/ButtonInvoker";
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
  const quantityReachedToMax = currentRemainingQuantity <= 0;

  const invokerRef = useRef<ButtonInvoker | null>(null);

  if (!invokerRef.current) {
    invokerRef.current = new ButtonInvoker();
    const addToCartCommand = new AddToCartCommand(dispatch, id);
    invokerRef.current.setCommands("addProduct", addToCartCommand);
  }

  const addToCartHandler = useCallback(() => {
    invokerRef.current?.pressButton("addProduct");
    setIsBtnDisabled(true);
  }, [setIsBtnDisabled]);

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
