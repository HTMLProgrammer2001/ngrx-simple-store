import {cartReducer, initialState} from './cart.reducer';

describe('Cart Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = cartReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
