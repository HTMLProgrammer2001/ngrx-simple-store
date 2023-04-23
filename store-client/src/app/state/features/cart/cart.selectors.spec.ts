import * as fromCart from './cart.reducer';
import {selectCartState} from './cart.selectors';

describe('Cart Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCartState({
      [fromCart.cartFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
