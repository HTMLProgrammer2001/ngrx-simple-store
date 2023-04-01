import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CheckoutRoutingModule} from './checkout-routing.module';
import {ViewCheckoutComponent} from './views/view-checkout/view-checkout.component';
import {SharedModule} from '../../common/shared.module';


@NgModule({
  declarations: [
    ViewCheckoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CheckoutRoutingModule
  ]
})
export class CheckoutModule { }
