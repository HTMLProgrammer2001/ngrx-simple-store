export interface BookModel {
  id: number;
  title: string;
  posterUrl: string;
  pages: number;
  price: number;
  leftAmount: number;
  author: BookAuthorModel;
  genres: Array<BookGenreModel>;
  reviews: Array<ReviewModel>;
}

export interface BookAuthorModel {
  id: number;
  code: string;
  name: string;
}

export interface BookGenreModel {
  id: number;
  code: string;
  name: string;
}

export interface ReviewModel {
  id: number;
  author: string;
  content: string;
  mark: number;
  date: string;
}

export interface CheckoutPostModel {
  cartItems: Array<{bookId: number, count: number}>;
  email: string;
  name: string;
}
