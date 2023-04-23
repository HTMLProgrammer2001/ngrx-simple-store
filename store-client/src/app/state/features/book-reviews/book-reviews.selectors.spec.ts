import * as fromBooks from './book-reviews.reducer';
import {selectBookReviewsState} from './book-reviews.selectors';

describe('Book Reviews Selectors', () => {
  it('should select the feature state', () => {
    const result = selectBookReviewsState({
      [fromBooks.bookReviewsFeatureKey]: {}
    });

    expect(result).toEqual(null);
  });
});
