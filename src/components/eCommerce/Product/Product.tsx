import { Button, Spinner } from 'react-bootstrap';
import styles from './styles.module.css';
import { TProduct } from '@customTypes/product';
import { useAppDispatch } from '@store/hooks';
import useDebounce from '@hooks/useDebounce';
import { memo, useCallback, useRef, useState } from 'react';
import { AddToCartCommand } from 'src/commands/AddToCartCommand';
import { Invoker } from 'src/commands/invoker';
import Like from '@assets/svg/love-outline.svg?react';
import LikeFill from '@assets/svg/love.svg?react';
import { actLikeToggle } from '@store/wishlist/wishlistSlice';

const { product, productImg, wishlistBtn } = styles;

const Product = ({
  id,
  title,
  price,
  img,
  max,
  quantity,
  isLiked,
}: Omit<TProduct, 'cat_prefix'>) => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const [isBtnDisabled, setIsBtnDisabled] = useDebounce(false, 300);
  const currentRemainingQuantity = max - (quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity <= 0;

  const invokerRef = useRef<Invoker | null>(null);

  if (!invokerRef.current) {
    invokerRef.current = new Invoker();
    const addToCartCommand = new AddToCartCommand(dispatch, id);
    invokerRef.current.setCommands('addProduct', addToCartCommand);
  }

  const addToCartHandler = useCallback(() => {
    invokerRef.current?.pressButton('addProduct');
    setIsBtnDisabled(true);
    console.log('added');
  }, [setIsBtnDisabled]);

  const likeToggleHandler = () => {
    if (isLoading) return;
    setIsLoading(true);

    dispatch(actLikeToggle(id))
      .unwrap()
      .then(() => setIsLoading(false))
      .catch(() => setIsLoading(false));
  };
  return (
    <div className={product}>
      <div className={wishlistBtn} onClick={likeToggleHandler}>
        {isLoading ? (
          <Spinner animation="border" size="sm" variant="primary" />
        ) : isLiked ? (
          <LikeFill />
        ) : (
          <Like />
        )}
      </div>
      <div className={productImg}>
        <img src={img} alt="" />
      </div>
      <h2>{title}</h2>
      <h3>{price.toFixed(2)} EG</h3>
      <p>
        Quantity:{' '}
        {!quantityReachedToMax ? currentRemainingQuantity : 'Reached limit'}
      </p>
      <Button
        variant="info"
        style={{ color: 'white' }}
        onClick={addToCartHandler}
        disabled={isBtnDisabled || quantityReachedToMax}
      >
        {isBtnDisabled ? (
          <>
            Loading &nbsp;
            <Spinner animation="border" size="sm" />
          </>
        ) : (
          'Add to cart'
        )}
      </Button>
    </div>
  );
};

export default memo(Product);
