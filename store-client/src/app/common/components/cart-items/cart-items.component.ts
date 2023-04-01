import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartItem} from '../../../state/features/cart/cart.reducer';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss']
})
export class CartItemsComponent {
  @Input() public cartItems: Array<CartItem> = [];
  @Input() public totalPrice: number = 0;
  @Input() public editable: boolean;

  @Output() deleteCartItem = new EventEmitter<CartItem>();
  @Output() setCartCount = new EventEmitter<{cartItem: CartItem, count: number}>();

  onDeleteCartItem(cartItem: CartItem): void {
    this.deleteCartItem.emit(cartItem);
  }

  onDecreaseCount(cartItem: CartItem): void {
    this.setCartCount.emit({cartItem, count: cartItem.count - 1});
  }

  onIncreaseCount(cartItem: CartItem): void {
    this.setCartCount.emit({cartItem, count: cartItem.count + 1});
  }

  onSetCartCount(cartItem: CartItem, count: number): void {
    this.setCartCount.emit({cartItem, count});
  }
}
