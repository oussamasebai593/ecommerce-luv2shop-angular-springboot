/*import { OrderItem } from './order-item';

describe('OrderItem', () => {
  it('should create an instance', () => {
    expect(new OrderItem()).toBeTruthy();
  });
});
*/
import { OrderItem } from './order-item';
import { CartItem } from './cart-item';
import { Product } from './product';

describe('OrderItem', () => {
  it('should create OrderItem', () => {
    const mockProduct = new Product('1', 'Sample Product', 100);
    const cartItem = new CartItem(mockProduct);
    expect(new OrderItem(cartItem)).toBeTruthy();
  });
});
