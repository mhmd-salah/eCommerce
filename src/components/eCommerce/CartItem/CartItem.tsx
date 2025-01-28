import { Form, Button } from 'react-bootstrap';
import styles from './styles.module.css';
import { TProduct } from '@customTypes/product';
import { memo } from 'react';

const { cartItem, product, productImg, productInfo, cartItemSelection } =
  styles;

type cartItemsProps = TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void;
};
const CartItem = ({
  id,
  title,
  price,
  img,
  max,
  quantity,
  changeQuantityHandler,
}: cartItemsProps) => {
  const renderOptions = Array(max)
    .fill(0)
    .map((_, idx) => {
      const quantity = ++idx;
      return (
        <option value={quantity} key={idx}>
          {quantity}
        </option>
      );
    });
  const changeQuantity = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const quantity = event.target.value;
    changeQuantityHandler(id, +quantity);
  };
  return (
    <div className={cartItem}>
      <div className={product}>
        <div className={productImg}>
          <img src={img} alt={title} />
        </div>
        <div className={productInfo}>
          <h2>{title}</h2>
          <h3>{price}</h3>
          <Button
            variant="secondary"
            style={{ color: 'white', width: '100px' }}
            className="mt-auto"
          >
            Remove
          </Button>
        </div>
      </div>

      <div className={cartItemSelection}>
        <span className="d-block mb-1">Quantity</span>
        <Form.Select onChange={changeQuantity} value={quantity}>
          {renderOptions}
        </Form.Select>
      </div>
    </div>
  );
};

export default memo(CartItem);
