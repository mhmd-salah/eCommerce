import { AppDispatch } from '@store/index';
import { Command } from './AddToCartCommand';
import { cartItemRemove } from '@store/cart/cartSlice';

export class RemoveFromCart implements Command {
  private dispatch: AppDispatch;
  private productId: number;

  constructor(dispatch: AppDispatch, productId: number) {
    this.productId = productId;
    this.dispatch = dispatch;
  }
  execute(): void {
    this.dispatch(cartItemRemove(this.productId));
  }
}
