import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReplaySubject, takeUntil} from 'rxjs';
import {CartFacadeService} from '../../services/cart.facade.service';
import {CartItem} from '../../../../state/features/cart/cart.reducer';

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.scss']
})
export class ViewCartComponent implements OnInit, OnDestroy {
  public cartItems: Array<CartItem> = [];
  public totalPrice: number = 0;
  private onDestroy = new ReplaySubject(1);

  constructor(
    private route: ActivatedRoute,
    private cartFacadeService: CartFacadeService,
  ) {
    this.cartFacadeService.getCartItems$()
      .pipe(takeUntil(this.onDestroy))
      .subscribe(state => this.cartItems = state);

    this.cartFacadeService.getCartTotalPrice$()
      .pipe(takeUntil(this.onDestroy))
      .subscribe(state => this.totalPrice = state);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.onDestroy.next(null);
    this.onDestroy.complete();
  }

  onDeleteCartItem(cartItem: CartItem) {
    this.cartFacadeService.deleteCartItem(cartItem.bookId);
  }

  decreaseCount(cartItem: CartItem) {
    this.cartFacadeService.setCartItemCount(cartItem.bookId, cartItem.count - 1);
  }

  increaseCount(cartItem: CartItem) {
    this.cartFacadeService.setCartItemCount(cartItem.bookId, cartItem.count + 1);
  }

  setCartCount(cartItem: CartItem, count: number) {
    this.cartFacadeService.setCartItemCount(cartItem.bookId, count);
  }
}
