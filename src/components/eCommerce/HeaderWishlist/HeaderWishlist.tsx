import Logo from '@assets/svg/wishlist.svg?react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '@store/hooks';
const { container, totalNum, pumpAnimate } = styles;
const HeaderWishlist = () => {
  const [isAnimate, setIsAnimate] = useState(false);
  const totalQuantity = useAppSelector((state) => state.wishlist.itemsId);
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
      <Link to={'/wishlist'} style={{ position: 'relative' }}>
        <Logo title="basket icon" />
        {totalQuantity.length > 0 && (
          <div className={quantityStyle}>{totalQuantity.length}</div>
        )}
      </Link>
    </div>
  );
};

export default HeaderWishlist;
