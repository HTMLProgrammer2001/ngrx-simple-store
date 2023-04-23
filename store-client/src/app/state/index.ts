import {ActionReducerMap} from '@ngrx/store/src/models';
import {booksListFeatureKey, booksListReducer, BooksListState} from './features/books-list/books-list.reducer';
import {cartFeatureKey, cartReducer, CartState} from './features/cart/cart.reducer';
import {
  bookDetailsFeatureKey,
  bookDetailsReducer,
  BookDetailsState
} from './features/book-details/book-details.reducer';
import {
  bookReviewsFeatureKey,
  bookReviewsReducer,
  BookReviewsState
} from './features/book-reviews/book-reviews.reducer';

export const reducers: ActionReducerMap<any, any> = {
  [booksListFeatureKey]: booksListReducer,
  [bookDetailsFeatureKey]: bookDetailsReducer,
  [bookReviewsFeatureKey]: bookReviewsReducer,
  [cartFeatureKey]: cartReducer,
};

export type State = {
  [booksListFeatureKey]: BooksListState;
  [bookDetailsFeatureKey]: BookDetailsState;
  [bookReviewsFeatureKey]: BookReviewsState;
  [cartFeatureKey]: CartState;
}
