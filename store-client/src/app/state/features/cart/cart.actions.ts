import {createAction, props} from '@ngrx/store';
import {CartItem} from './cart.reducer';

export const addCartItem = createAction(
  '[Cart] Add item',
  props<CartItem>()
);

export const setCartItemCount = createAction(
  '[Cart] Set item count',
  props<{bookId: number, count: number}>()
);

export const deleteCartItem = createAction(
  '[Cart] Delete item',
  props<{bookId: number}>()
);

export const resetCartItem = createAction(
  '[Cart] Reset'
);
