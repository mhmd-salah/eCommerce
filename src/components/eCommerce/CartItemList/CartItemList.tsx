import { TProduct } from '@customTypes/product';
import CartItem from '../CartItem/CartItem';

type CartItemListProps = {
  products: TProduct[];
  changeQuantityHandler: (id: number, quantity: number) => void;
};

const CartItemList = ({
  products,
  changeQuantityHandler,
}: CartItemListProps) => {
  const renderList = products.map((el) => (
    <CartItem
      key={el.id}
      {...el}
      changeQuantityHandler={changeQuantityHandler}
    />
  ));
  return <div>{renderList}</div>;
};

export default CartItemList;
