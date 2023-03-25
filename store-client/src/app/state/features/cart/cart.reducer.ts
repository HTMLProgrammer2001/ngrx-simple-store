import {createReducer, on} from '@ngrx/store';
import * as CartActions from './cart.actions';

export const cartFeatureKey = 'cart';

export interface CartItem {
  bookId: number;
  bookName: string;
  bookPrice: number;
  bookPosterUrl: string;
  count: number;
}

export interface CartState {
  items: Array<CartItem>;
}

export const initialState: CartState = {
  items: [],
};

export const cartReducer = createReducer(
  initialState,

  on(CartActions.addCartItem, (state, action) => {
    const hasItem = !!state.items.find(el => el.bookId === action.bookId);

    if(hasItem) {
      return {
        ...state,
        items: state.items.map(el => ({...el, count: el.bookId === action.bookId ? el.count + 1 : el.count}))
      };
    } else {
      return {
        ...state,
        items: [...state.items, {
          bookId: action.bookId, bookName: action.bookName, bookPrice: action.bookPrice,
          bookPosterUrl: action.bookPosterUrl, count: action.count
        }]
      };
    }
  }),
  on(CartActions.setCartItemCount, (state, action) => ({
    ...state,
    items: state.items.map(el => el.bookId === action.bookId ? {...el, count: action.count} : {...el})
  })),
  on(CartActions.deleteCartItem, (state, action) => ({
    ...state,
    items: state.items.filter(el => el.bookId !== action.bookId)
  }))
);
