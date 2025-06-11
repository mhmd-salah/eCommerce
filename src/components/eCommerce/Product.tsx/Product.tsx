import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import type { TProduct } from "@customTypes";
const { product, productImg } = styles;

const Product = ({ img, title, price }: TProduct) => {
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" style={{ color: "white" }}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
