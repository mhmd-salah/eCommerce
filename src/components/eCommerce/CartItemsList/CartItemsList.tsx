import type { TProduct } from "@customTypes";
import CartItem from "../CartItem/CartItem";

type CartItemsListProps = { products: TProduct[] };

const CartItemsList = ({ products }: CartItemsListProps) => {
  const renderList = products.map((el) => <CartItem key={el.id} {...el} />);
  return <div>{renderList}</div>;
};

export default CartItemsList;
