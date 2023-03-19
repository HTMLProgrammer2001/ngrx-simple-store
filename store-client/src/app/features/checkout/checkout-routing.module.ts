import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewCheckoutComponent} from './views/view-checkout/view-checkout.component';

const routes: Routes = [
  {
    path: '',
    component: ViewCheckoutComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
