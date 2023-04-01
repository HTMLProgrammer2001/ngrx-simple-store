import {createAction, props} from '@ngrx/store';
import {CheckoutBodyViewModel} from '../../../features/checkout/types/view-model/checkout-body-view-model';

export const checkoutStart = createAction(
  '[Checkout] Start',
  props<{body: CheckoutBodyViewModel}>()
);

export const checkoutReset = createAction(
  '[Checkout] Reset'
);
