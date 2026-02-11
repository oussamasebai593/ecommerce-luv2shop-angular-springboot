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
    const dummyProduct: Product = {
      id: '1',
      sku: 'SKU1',
      name: 'Test',
      description: 'Test product',
      unitPrice: 100,
      imageUrl: 'test.jpg',
      active: true,
      unitsInStock: 10,
      dateCreated: new Date(),
      lastUpdated: new Date()
    };

    const cartItem = new CartItem(dummyProduct);
    expect(cartItem).toBeTruthy();
  });
});
