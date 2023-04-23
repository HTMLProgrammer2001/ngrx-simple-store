import {createFeatureSelector} from '@ngrx/store';
import * as fromBooks from './book-details.reducer';

export const selectBookDetailsState = createFeatureSelector<fromBooks.BookDetailsState>(
  fromBooks.bookDetailsFeatureKey
);

