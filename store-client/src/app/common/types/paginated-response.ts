export interface PaginatedResponse<T> {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  responseList: Array<T>;
}
