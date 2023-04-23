import {bookReviewsReducer, initialState} from './book-reviews.reducer';

describe('Book Reviews Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = bookReviewsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
