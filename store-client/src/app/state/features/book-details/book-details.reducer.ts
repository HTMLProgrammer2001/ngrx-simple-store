import {createReducer, on} from '@ngrx/store';
import * as BooksActions from './book-details.actions';
import {BooksDetailsViewModel} from '../../../features/book-details/types/view-model/books-details-view-model';

export const bookDetailsFeatureKey = 'bookDetails' as const;

export interface BookDetailsState {
  isLoading: boolean;
  error: string;
  book: BooksDetailsViewModel;
}

export const initialState: BookDetailsState = {
  isLoading: false,
  error: null,
  book: null
};

export const bookDetailsReducer = createReducer(
  initialState,

  on(BooksActions.loadBookDetails, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(BooksActions.loadBookDetailsSuccess, (state, action) => ({
    ...state,
    book: action.data,
    isLoading: false,
    error: null
  })),
  on(BooksActions.loadBookDetailsFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  })),
  on(BooksActions.clearBookDetails, (state, action) => ({
    ...state,
    isLoading: false,
    error: null,
    book: null
  })),
);
