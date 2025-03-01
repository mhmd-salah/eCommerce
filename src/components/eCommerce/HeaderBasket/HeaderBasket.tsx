import Logo from '@assets/svg/cart.svg?react';
import styles from './styles.module.css';
import { useAppSelector } from '@store/hooks';
import { getCatTotalQuantitySelector } from '@store/cart/cartSlice';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const { container, totalNum, pumpAnimate } = styles;
const HeaderBasket = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector(getCatTotalQuantitySelector);
  const quantityStyle = `${totalNum} ${isAnimate ? pumpAnimate : ''}`;

  useEffect(() => {
    if (!totalQuantity) {
      return;
    }
    setIsAnimate(true);
    const debounce = setTimeout(() => {
      setIsAnimate(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [totalQuantity]);

  return (
    <div className={container}>
      <Link to={'/cart'}>
        <Logo title="basket icon" />
        {totalQuantity > 0 && (
          <div className={quantityStyle}>{totalQuantity}</div>
        )}
      </Link>
    </div>
  );
};

export default HeaderBasket;
