export interface BooksListFilterViewModel {
  title: string;
  priceFrom: number;
  priceTo: number;
  markFrom: number;
  markTo: number;
  available: boolean;
  authors: Array<string>;
  genres: Array<string>;
}
