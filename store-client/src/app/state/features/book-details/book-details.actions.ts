import {createAction, props} from '@ngrx/store';
import {BooksDetailsViewModel} from '../../../features/book-details/types/view-model/books-details-view-model';

export const loadBookDetails = createAction(
  '[Book details] Load Book Details',
  props<{id: number}>()
);

export const loadBookDetailsSuccess = createAction(
  '[Book details] Load Book Details Success',
  props<{ data: BooksDetailsViewModel }>()
);

export const loadBookDetailsFailure = createAction(
  '[Book details] Load Book Details Failure',
  props<{ error: string }>()
);

export const clearBookDetails = createAction(
  '[Book details] Clear book details'
);
