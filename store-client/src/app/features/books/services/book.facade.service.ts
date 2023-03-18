import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Paginator} from '../../../shared/types/paginator';
import {BooksListFilterViewModel} from '../types/view-model/books-list-filter-view-model';
import {loadBooksList} from '../../../state/features/books-list/books-list.actions';
import {Observable} from 'rxjs';
import {BooksListState} from '../../../state/features/books-list/books-list.reducer';
import {selectBooksListState} from '../../../state/features/books-list/books-list.selectors';

@Injectable({
  providedIn: 'root'
})
export class BookFacadeService {
  constructor(private store: Store) {
  }

  getBooksList(paginator: Paginator, filter: BooksListFilterViewModel): void {
    this.store.dispatch(loadBooksList({paginator, filter}));
  }

  getBooksState$(): Observable<BooksListState> {
    return this.store.select(selectBooksListState);
  }
}
