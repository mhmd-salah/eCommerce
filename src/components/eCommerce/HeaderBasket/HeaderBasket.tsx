import Logo from "@assets/svg/cart.svg?react";
import styles from "./styles.module.css";
import { useAppSelector } from "@store/hooks";
import { getCatTotalQuantitySelector } from "@store/cart/cartSlice";
const { basketContainer, basketQuantity } = styles;
const HeaderBasket = () => {
  const totalQuantity = useAppSelector(getCatTotalQuantitySelector);

  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  );
};

export default HeaderBasket;
