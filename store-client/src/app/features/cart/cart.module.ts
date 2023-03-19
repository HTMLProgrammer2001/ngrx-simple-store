import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CartRoutingModule} from './cart-routing.module';
import {ViewCartComponent} from './views/view-cart/view-cart.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    ViewCartComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CartRoutingModule
  ]
})
export class CartModule { }
