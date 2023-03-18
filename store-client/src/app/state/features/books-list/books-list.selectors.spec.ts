import * as fromBooks from './books-list.reducer';
import { selectBooksListState } from './books-list.selectors';

describe('Books List Selectors', () => {
  it('should select the feature state', () => {
    const result = selectBooksListState({
      [fromBooks.booksListFeatureKey]: {}
    });

    expect(result).toEqual(null);
  });
});
