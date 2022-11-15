import actions from '../../actions';
import ProductMock from '../../__mocks__/ProductMock';

describe('actions test', () => {
  const payload = ProductMock;
  test('addToCard', () => {
    const expected = {
      type: 'ADD_TO_CART',
      payload,
    };
    expect(actions.addToCart(payload)).toEqual(expected);
  });

  test('removeFromCart', () => {
    const expected = {
      type: 'REMOVE_FROM_CART',
      payload,
    };
    expect(actions.removeFromCart(payload)).toEqual(expected);
  });
});
