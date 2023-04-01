import {Injectable} from '@angular/core';
import {CheckoutBodyViewModel} from '../types/view-model/checkout-body-view-model';
import {CheckoutBodyModel} from '../types/model/checkout-body-model';

@Injectable({
  providedIn: 'root'
})
export class CheckoutMapperService {
  public initializeCheckoutBodyViewModel(): CheckoutBodyViewModel {
    return {
      cartItems: [],
      details: {email: '', name: ''},
      totalPrice: 0
    };
  }

  public checkoutBodyViewModelToModel(source: CheckoutBodyViewModel): CheckoutBodyModel {
    return {
      email: source.details.email,
      name: source.details.name,
      cartItems: source.cartItems.map(el => ({bookId: el.bookId, count: el.count}))
    };
  }
}
