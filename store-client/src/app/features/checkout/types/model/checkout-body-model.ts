export interface CheckoutBodyModel {
  cartItems: Array<{bookId: number, count: number}>;
  email: string;
  name: string;
}
