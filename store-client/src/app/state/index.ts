import {ActionReducerMap} from '@ngrx/store/src/models';
import {booksListFeatureKey, booksListReducer, BooksListState} from './features/books-list/books-list.reducer';
import {cartFeatureKey, cartReducer, CartState} from './features/cart/cart.reducer';

export const reducers: ActionReducerMap<any, any> = {
  [booksListFeatureKey]: booksListReducer,
  [cartFeatureKey]: cartReducer
};

export type State = {
  [booksListFeatureKey]: BooksListState;
  [cartFeatureKey]: CartState;
}
