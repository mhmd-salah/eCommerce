import Heading from "@components/common/Heading/Heading";
import { CartItem } from "@components/eCommerce";
import CartSubTotalPrice from "@components/eCommerce/CartSubtotalPrice/CartSubtotalPrice";

const Cart = () => {
  return (
    <div>
      <Heading>Cart</Heading>
      <CartItem />
      <CartItem />
      <CartItem />
      <CartSubTotalPrice />
    </div>
  );
};

export default Cart;
