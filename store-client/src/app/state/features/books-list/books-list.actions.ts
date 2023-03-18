import {createAction, props} from '@ngrx/store';
import {BooksListViewModel} from '../../../features/books/types/view-model/books-list-view-model';
import {PaginatedResponse} from '../../../shared/types/paginated-response';
import {Paginator} from '../../../shared/types/paginator';
import {BooksListFilterViewModel} from '../../../features/books/types/view-model/books-list-filter-view-model';

export const loadBooksList = createAction(
  '[Books] Load Books list',
  props<{paginator: Paginator, filter: BooksListFilterViewModel}>()
);

export const loadBooksListSuccess = createAction(
  '[Books] Load Books List Success',
  props<{ data: PaginatedResponse<BooksListViewModel> }>()
);

export const loadBooksListFailure = createAction(
  '[Books] Load Books List Failure',
  props<{ error: string }>()
);

export const resetBooksList = createAction(
  '[Books] Reset Books List state'
)
