import {Component, OnDestroy, OnInit} from '@angular/core';
import {ReplaySubject, takeUntil} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CheckoutFacadeService} from '../../services/checkout.facade.service';
import {CheckoutBodyViewModel} from '../../types/view-model/checkout-body-view-model';
import {CheckoutMapperService} from '../../services/checkout.mapper.service';

@Component({
  selector: 'app-view-checkout',
  templateUrl: './view-checkout.component.html',
  styleUrls: ['./view-checkout.component.scss']
})
export class ViewCheckoutComponent implements OnInit, OnDestroy {
  public checkoutViewModel: CheckoutBodyViewModel;
  public formGroup: FormGroup;
  private onDestroy = new ReplaySubject(1);

  constructor(
    private route: ActivatedRoute,
    private checkoutFacadeService: CheckoutFacadeService,
    private checkoutMapperService: CheckoutMapperService,
    private fb: FormBuilder
  ) {
    this.checkoutViewModel = this.checkoutMapperService.initializeCheckoutBodyViewModel();

    this.checkoutFacadeService.getCartItems$()
      .pipe(takeUntil(this.onDestroy))
      .subscribe(state => this.checkoutViewModel.cartItems = state);

    this.checkoutFacadeService.getCartTotalPrice$()
      .pipe(takeUntil(this.onDestroy))
      .subscribe(state => this.checkoutViewModel.totalPrice = state);
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      email: [this.checkoutViewModel.details.email, [Validators.required, Validators.email], null, {updateOn: 'blur'}],
      name: [this.checkoutViewModel.details.name, [Validators.required], null, {updateOn: 'blur'}],
    });
  }

  ngOnDestroy() {
    this.onDestroy.next(null);
    this.onDestroy.complete();
  }

  onCheckout() {
    this.formGroup.markAllAsTouched();

    if (this.formGroup.valid) {
      this.checkoutViewModel.details = this.formGroup.value;
      this.checkoutFacadeService.checkout$({...this.checkoutViewModel});
    }
    else {
      alert('Errors occur');
    }
  }
}
