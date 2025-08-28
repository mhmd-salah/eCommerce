// import { useAppSelector } from "@store/hooks";
import styles from "./styles.module.css";

import Logo from "@assets/svg/wishlist.svg?react";
// import { getCartTotalQuantitySelector } from "@store/cart/selectors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const { container, totalNum, pumpAnimate, iconWrapper } = styles;
const HeaderWishlist = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const navigate = useNavigate();

  const totalQuantity = 0;
  const quantityStyle = `${totalNum} ${isAnimate ? pumpAnimate : ""}`;
  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);
    return () => {
      clearTimeout(debounce);
    };
  }, [totalQuantity]);

  return (
    <div className={container} onClick={() => navigate("/cart")}>
      <div className={iconWrapper}>
        <Logo title="wishlist icon " />
        {totalQuantity > 0 && (
          <div className={quantityStyle}>{totalQuantity}</div>
        )}
      </div>
      <h3>Wishlist</h3>
    </div>
  );
};

export default HeaderWishlist;
