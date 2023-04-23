import {createAction, props} from '@ngrx/store';
import {Paginator} from '../../../common/types/paginator';
import {PaginatedResponse} from '../../../common/types/paginated-response';
import {BooksReviewViewModel} from '../../../features/book-details/types/view-model/books-review-view-model';

export const loadBookReviewsList = createAction(
  '[Book reviews] Load Book Reviews List',
  props<{bookId: number, paginator: Paginator}>()
);

export const loadBookReviewsListSuccess = createAction(
  '[Book reviews] Load Book Reviews List Success',
  props<{ data: PaginatedResponse<BooksReviewViewModel> }>()
);

export const loadBookReviewsListFailure = createAction(
  '[Book reviews] Load Book Reviews Failure',
  props<{ error: string }>()
);

export const clearBookReviewsDetails = createAction(
  '[Book reviews] Clear book reviews'
);
