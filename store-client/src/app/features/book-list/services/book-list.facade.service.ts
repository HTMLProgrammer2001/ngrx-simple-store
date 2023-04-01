import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Paginator} from '../../../common/types/paginator';
import {BooksListFilterViewModel} from '../types/view-model/books-list-filter-view-model';
import {
  clearBooksList, initializeBooksList,
  loadBooksList,
  resetBooksListState
} from '../../../state/features/books-list/books-list.actions';
import {Observable} from 'rxjs';
import {BooksListState} from '../../../state/features/books-list/books-list.reducer';
import {
  selectBooksFilterDataState,
  selectBooksListState
} from '../../../state/features/books-list/books-list.selectors';
import {addCartItem} from '../../../state/features/cart/cart.actions';
import {BooksListViewModel} from '../types/view-model/books-list-view-model';
import {selectCartItemCount} from '../../../state/features/cart/cart.selectors';

@Injectable({
  providedIn: 'root'
})
export class BookListFacadeService {
  constructor(private store: Store) {
  }

  getBooksListState$(): Observable<BooksListState> {
    return this.store.select(selectBooksListState);
  }

  getBooksListFilterState$(): Observable<any> {
    return this.store.select(selectBooksFilterDataState);
  }

  getCartItemCount$(bookId: number): Observable<number> {
    return this.store.select(selectCartItemCount(bookId));
  }

  initializeBooksList(): void {
    this.store.dispatch(initializeBooksList());
  }

  getBooksList(paginator: Paginator, filter: BooksListFilterViewModel): void {
    this.store.dispatch(loadBooksList({paginator, filter}));
  }

  resetBooksListState(): void {
    this.store.dispatch(resetBooksListState());
  }

  clearBooksList(): void {
    this.store.dispatch(clearBooksList());
  }

  addItemToCart(book: BooksListViewModel) {
    this.store.dispatch(addCartItem({
      bookId: book.id,
      bookName: book.title,
      bookPrice: book.price,
      bookPosterUrl: book.posterUrl,
      count: 1
    }));
  }
}
