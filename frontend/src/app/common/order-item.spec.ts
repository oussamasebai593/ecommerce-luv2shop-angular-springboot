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
  it('should create an instance', () => {
    const dummyProduct: Product = {
      id: '1',
      sku: 'SKU1',
      name: 'Sample Product',
      description: 'Sample description',
      unitPrice: 100,
      imageUrl: 'sample.jpg',
      active: true,
      unitsInStock: 5,
      dateCreated: new Date(),
      lastUpdated: new Date()
    };

    const cartItem = new CartItem(dummyProduct);
    const orderItem = new OrderItem(cartItem);
    expect(orderItem).toBeTruthy();
  });
});

