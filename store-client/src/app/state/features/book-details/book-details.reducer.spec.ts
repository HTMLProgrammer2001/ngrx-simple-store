import {bookDetailsReducer, initialState} from './book-details.reducer';

describe('Book Details Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = bookDetailsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
