import {createFeatureSelector} from '@ngrx/store';
import * as fromBooks from './book-reviews.reducer';

export const selectBookReviewsState = createFeatureSelector<fromBooks.BookReviewsState>(
  fromBooks.bookReviewsFeatureKey
);

