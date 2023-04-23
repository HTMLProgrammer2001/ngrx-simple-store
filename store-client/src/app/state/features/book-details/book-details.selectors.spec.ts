import * as fromBooks from './book-details.reducer';
import {selectBookDetailsState} from './book-details.selectors';

describe('Book Details Selectors', () => {
  it('should select the feature state', () => {
    const result = selectBookDetailsState({
      [fromBooks.bookDetailsFeatureKey]: {}
    });

    expect(result).toEqual(null);
  });
});
