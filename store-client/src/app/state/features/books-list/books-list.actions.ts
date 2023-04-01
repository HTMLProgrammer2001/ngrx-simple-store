import {createAction, props} from '@ngrx/store';
import {BooksListViewModel} from '../../../features/book-list/types/view-model/books-list-view-model';
import {PaginatedResponse} from '../../../common/types/paginated-response';
import {Paginator} from '../../../common/types/paginator';
import {BooksListFilterViewModel} from '../../../features/book-list/types/view-model/books-list-filter-view-model';
import {IdCodeName} from '../../../common/types/id-code-name';

export const initializeBooksList = createAction(
  '[Books list] Initializing book-list list'
);

export const initializeBooksListSuccess = createAction(
  '[Books list] Initialize book-list list Success',
  props<{authors: Array<IdCodeName>, genres: Array<IdCodeName>}>()
);

export const initializeBooksListFailure = createAction(
  '[Books list] Initialize book-list list Failure',
  props<{ error: string }>()
);

export const loadBooksList = createAction(
  '[Books list] Load Books list',
  props<{paginator: Paginator, filter: BooksListFilterViewModel}>()
);

export const loadBooksListSuccess = createAction(
  '[Books list] Load Books List Success',
  props<{ data: PaginatedResponse<BooksListViewModel> }>()
);

export const loadBooksListFailure = createAction(
  '[Books list] Load Books List Failure',
  props<{ error: string }>()
);

export const clearBooksList = createAction(
  '[Books list] Clear book-list list'
);

export const resetBooksListState = createAction(
  '[Books list] Reset Books List state'
);
