import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CartItem} from '../../../state/features/cart/cart.reducer';
import {selectCartItems, selectTotalPrice} from '../../../state/features/cart/cart.selectors';
import {checkoutStart} from '../../../state/features/checkout/checkout.actions';
import {CheckoutBodyViewModel} from '../types/view-model/checkout-body-view-model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutFacadeService {
  constructor(private store: Store) {
  }

  getCartItems$(): Observable<Array<CartItem>> {
    return this.store.select(selectCartItems);
  }

  getCartTotalPrice$(): Observable<number> {
    return this.store.select(selectTotalPrice);
  }

  checkout$(body: CheckoutBodyViewModel): void {
    this.store.dispatch(checkoutStart({body}));
  }
}
