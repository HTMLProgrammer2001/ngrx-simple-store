import {createReducer, on} from '@ngrx/store';
import * as BooksActions from './books-list.actions';
import {BooksListViewModel} from '../../../features/books/types/view-model/books-list-view-model';
import {environment} from '../../../../environments/environment';

export const booksListFeatureKey = 'booksList';

export interface BooksListState {
  size: number;
  currentPage: number;
  totalElements: number;
  isLoading: boolean;
  error: string;
  books: Array<BooksListViewModel>;
}

export const initialState: BooksListState = {
  size: environment.defaultPageSize,
  currentPage: 0,
  totalElements: 0,
  isLoading: false,
  error: null,
  books: []
};

export const booksListReducer = createReducer(
  initialState,
  on(BooksActions.loadBooksList, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(BooksActions.loadBooksListSuccess, (state, action) => ({
    ...state,
    size: action.data.size,
    currentPage: action.data.page,
    totalElements: action.data.totalElements,
    books: [...state.books, ...action.data.responseList],
    isLoading: false,
    error: null
  })),
  on(BooksActions.loadBooksListFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  })),
  on(BooksActions.resetBooksList, (state, action) => ({
    ...initialState
  })),
);
