import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBooks from './books-list.reducer';

export const selectBooksListState = createFeatureSelector<fromBooks.BooksListState>(
  fromBooks.booksListFeatureKey
);
