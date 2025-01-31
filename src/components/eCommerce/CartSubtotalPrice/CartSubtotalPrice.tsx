import { TProduct } from '@customTypes/product';
import styles from './styles.module.css';

type CartSubtotalProps = {
  products: TProduct[];
};

const CartSubTotalPrice = ({ products }: CartSubtotalProps) => {
  console.log(products);
  const subtotal = [...products].reduce((acc, cur) => {
    const price = cur.price;
    const quantity = cur.quantity;
    if (quantity && typeof quantity == 'number') {
      return acc + price * quantity;
    } else {
      return acc;
    }
  }, 0);
  return (
    <div className={styles.container}>
      <span>Subtotal:</span>
      <span>{subtotal.toFixed(2)}</span>
    </div>
  );
};

export default CartSubTotalPrice;
