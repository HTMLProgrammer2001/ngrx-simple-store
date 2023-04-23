import {booksListReducer, initialState} from './books-list.reducer';

describe('Books List Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = booksListReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
