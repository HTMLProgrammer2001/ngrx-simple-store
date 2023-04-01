import {CartItem} from '../../state/features/cart/cart.reducer';

export class StoreService {
  static CART_ITEMS_STORAGE_KEY = 'cartItems';

  static saveCartItems(items: Array<CartItem>) {
    localStorage.setItem(this.CART_ITEMS_STORAGE_KEY, JSON.stringify(items));
  }

  static getCartItems(): Array<CartItem> {
    const cartItemsRaw = localStorage.getItem(this.CART_ITEMS_STORAGE_KEY);

    if (cartItemsRaw) {
      try {
        return JSON.parse(cartItemsRaw) as Array<CartItem>;
      } catch (e) {
        return [];
      }
    } else {
      return [];
    }
  }

  static deleteCartItems(): void {
    localStorage.removeItem(this.CART_ITEMS_STORAGE_KEY);
  }
}
