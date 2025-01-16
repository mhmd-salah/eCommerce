import Heading from "@components/common/Heading/Heading";
import { CartItem } from "@components/eCommerce";

const Cart = () => {
  return (
    <div>
      <Heading>Cart</Heading>
      <CartItem/>
      <CartItem/>
      <CartItem/>
    </div>
  )
}

export default Cart