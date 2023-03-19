import {createReducer, on} from '@ngrx/store';
import * as BooksActions from './books-list.actions';
import {BooksListViewModel} from '../../../features/book-list/types/view-model/books-list-view-model';
import {environment} from '../../../../environments/environment';
import {IdCodeName} from '../../../shared/types/id-code-name';

export const booksListFeatureKey = 'booksList';

export interface BooksListState {
  initialized: boolean;
  initializationError: string;
  authors: Array<IdCodeName>;
  genres: Array<IdCodeName>;

  size: number;
  currentPage: number;
  totalElements: number;
  hasMore: boolean;

  isLoading: boolean;
  error: string;
  books: Array<BooksListViewModel>;
}

export const initialState: BooksListState = {
  initialized: false,
  initializationError: null,
  authors: [],
  genres: [],

  size: environment.defaultPageSize,
  currentPage: 0,
  totalElements: 0,
  hasMore: false,

  isLoading: false,
  error: null,
  books: [],
};

export const booksListReducer = createReducer(
  initialState,

  on(BooksActions.initializeBooksList, (state, action) => ({
    ...state,
    initialized: false,
    initializationError: null,
    authors: [],
    genres: []
  })),
  on(BooksActions.initializeBooksListSuccess, (state, action) => ({
    ...state,
    initialized: true,
    initializationError: null,
    authors: action.authors,
    genres: action.genres
  })),
  on(BooksActions.initializeBooksListFailure, (state, action) => ({
    ...state,
    initialized: true,
    initializationError: action.error,
    authors: [],
    genres: []
  })),

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
    hasMore: action.data.page < action.data.totalPages,
    books: [...state.books, ...action.data.responseList],
    isLoading: false,
    error: null
  })),
  on(BooksActions.loadBooksListFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  })),
  on(BooksActions.resetBooksListState, (state, action) => ({
    ...initialState
  })),
  on(BooksActions.clearBooksList, (state, action) => ({
    ...state,
    size: environment.defaultPageSize,
    currentPage: 0,
    totalElements: 0,
    hasMore: false,

    isLoading: false,
    error: null,
    books: [],
  })),
);
