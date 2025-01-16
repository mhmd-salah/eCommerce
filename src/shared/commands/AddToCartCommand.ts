import { addToCart } from "@store/cart/cartSlice";
import { AppDispatch } from "@store/index";

export interface Command {
  execute(): void;
}

export class AddToCartCommand implements Command {
  private dispatch: AppDispatch;
  private productId: number;

  constructor(dispatch: AppDispatch, productId: number) {
    this.productId = productId;
    this.dispatch = dispatch;
  }
  execute(): void {
    this.dispatch(addToCart(this.productId));
  }
}


