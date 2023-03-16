export interface PaginatedResponse<T> {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  responseList: Array<T>;
}

export interface BookListResponse {
  id: number;
  title: string;
  posterUrl: string;
  pages: number;
  price: number;
  leftAmount: number;
  author: BookAuthorResponse;
  genres: Array<BookGenreResponse>;
  reviewsCount: number;
  avgMark: number;
}

export interface BookAuthorResponse {
  id: number;
  code: string;
  name: string;
}

export interface BookGenreResponse {
  id: number;
  code: string;
  name: string;
}

export interface BookDetailsResponse {
  id: number;
  title: string;
  posterUrl: string;
  pages: number;
  price: number;
  leftAmount: number;
  reviewsCount: number;
  avgMark: number;
  author: BookAuthorResponse;
  genres: Array<BookGenreResponse>;
  reviews: Array<ReviewResponse>;
}

export interface ReviewResponse {
  id: number;
  author: string;
  content: string;
  mark: number;
  date: string;
}
