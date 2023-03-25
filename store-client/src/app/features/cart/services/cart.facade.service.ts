import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CartItem} from '../../../state/features/cart/cart.reducer';
import {selectCartItems, selectTotalPrice} from '../../../state/features/cart/cart.selectors';
import {deleteCartItem, setCartItemCount} from '../../../state/features/cart/cart.actions';

@Injectable({
  providedIn: 'root'
})
export class CartFacadeService {
  constructor(private store: Store) {
  }

  getCartItems$(): Observable<Array<CartItem>> {
    return this.store.select(selectCartItems);
  }

  getCartTotalPrice$(): Observable<number> {
    return this.store.select(selectTotalPrice);
  }

  deleteCartItem(bookId: number): void {
    this.store.dispatch(deleteCartItem({bookId}));
  }

  setCartItemCount(bookId: number, count: number): void {
    this.store.dispatch(setCartItemCount({bookId, count}));
  }
}
