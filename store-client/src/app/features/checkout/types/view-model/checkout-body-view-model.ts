import {CartItem} from '../../../../state/features/cart/cart.reducer';
import {CheckoutDetailsFormViewModel} from './checkout-details-form-view-model';

export interface CheckoutBodyViewModel {
  cartItems: Array<CartItem>;
  details: CheckoutDetailsFormViewModel;
  totalPrice: number;
}
