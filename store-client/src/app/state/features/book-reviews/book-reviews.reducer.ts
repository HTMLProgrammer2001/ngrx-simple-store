import {createReducer, on} from '@ngrx/store';
import * as BookReviewsActions from './book-reviews.actions';
import {BooksReviewViewModel} from '../../../features/book-details/types/view-model/books-review-view-model';
import {environment} from '../../../../environments/environment';

export const bookReviewsFeatureKey = 'bookReviews' as const;

export interface BookReviewsState {
  size: number;
  currentPage: number;
  totalElements: number;
  hasMore: boolean;

  isLoading: boolean;
  error: string;
  reviews: Array<BooksReviewViewModel>;
}

export const initialState: BookReviewsState = {
  size: environment.defaultPageSize,
  currentPage: 0,
  totalElements: 0,
  hasMore: false,

  isLoading: false,
  error: null,
  reviews: [],
};

export const bookReviewsReducer = createReducer(
  initialState,

  on(BookReviewsActions.loadBookReviewsList, state => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(BookReviewsActions.loadBookReviewsListSuccess, (state, action) => ({
    ...state,
    size: action.data.size,
    currentPage: action.data.page,
    totalElements: action.data.totalElements,
    hasMore: action.data.page < action.data.totalPages,
    reviews: [...state.reviews, ...action.data.responseList],
    isLoading: false,
    error: null
  })),
  on(BookReviewsActions.loadBookReviewsListFailure, (state, action) => ({
    ...state,
    isLoading: false,
    error: action.error
  })),
  on(BookReviewsActions.clearBookReviewsDetails, (state, action) => ({
    ...state,
    size: environment.defaultPageSize,
    currentPage: 0,
    totalElements: 0,
    hasMore: false,

    isLoading: false,
    error: null,
    reviews: [],
  })),
);
