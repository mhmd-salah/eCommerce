interface Command {
  execute(): void;
}

class AddToCartCommand implements Command {
  constructor(private item: string, private cart: string[]) {}

  execute(): void {
    this.cart.push(this.item);
    console.log(`${this.item} added to cart`);
  }
}

class RemoveItemFromCart implements Command {
  constructor(private item: string, private cart: string[]) {}

  execute(): void {
    const index = this.cart.indexOf(this.item);

    if (index > -1) {
      this.cart.splice(index, 1);
      console.log(`${this.item} removed form cart`);
    }
  }
}

class CartInvoker {
  private history: Command[];

  executeCommand(command: Command): void {
    command.execute();
    this.history.push(command);
  }

  undo(): void {
    const command = this.history.pop();
    if (command) {
      console.log('undoing the last command');
    }
  }
}

const cart = [];

const invoker = new CartInvoker();

const addToCart = new AddToCartCommand('item 1', cart);
invoker.executeCommand(addToCart);

const removedCart = new RemoveItemFromCart('item 1', cart);
invoker.executeCommand(removedCart);

// class Node<T> {
//   data: T;
//   next: Node<T> | null;

//   constructor(data: T) {
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList<T> {
//   head: Node<T> | null;
//   constructor() {
//     this.head = null;
//   }
// }
