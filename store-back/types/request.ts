export interface PaginatorRequest {
  page: number;
  size: number;
}

export interface BooksFilterRequest {
  title: string;
  priceFrom: number;
  priceTo: number;
  markFrom: number;
  markTo: number;
  available: boolean;
  authors: Array<string>;
  genres: Array<string>;
}
