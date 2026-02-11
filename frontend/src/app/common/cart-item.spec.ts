/*import { CartItem } from './cart-item';

describe('CartItem', () => {
  it('should create an instance', () => {
    expect(new CartItem()).toBeTruthy();
  });
});
*/
import { CartItem } from './cart-item';
import { Product } from './product'; 

describe('CartItem', () => {
  it('should create an instance', () => {
    const dummyProduct: Product = { id: 1, name: 'Test', price: 100, quantity: 1 };
    const cartItem = new CartItem(dummyProduct);
    expect(cartItem).toBeTruthy();
  });
});
