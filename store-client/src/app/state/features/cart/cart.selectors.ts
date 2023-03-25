import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromCart from './cart.reducer';

export interface CartTotalData {
  totalCount: number;
  totalPrice: number;
}

export const selectCartState = createFeatureSelector<fromCart.CartState>(
  fromCart.cartFeatureKey
);

export const selectCartItems = createSelector(selectCartState, cartState => cartState.items);

export const selectCartItemCount = (bookId: number) => createSelector(
  selectCartState,
    cartState => cartState.items.find(el => el.bookId === bookId)?.count || 0
);

export const selectTotalPrice = createSelector(
  selectCartState,
  (cartState) => {
    return cartState.items
      .map(cartItem => cartItem.bookPrice * cartItem.count)
      .reduce((acc, cartItemPrice) => acc + cartItemPrice, 0);
  }
);

export const selectCartTotalData = createSelector(
  selectCartState,
  selectTotalPrice,
  (cartState, totalPrice) => ({
    totalCount: cartState.items.reduce((acc, el) => acc + el.count, 0),
    totalPrice: totalPrice
  } as CartTotalData)
);
