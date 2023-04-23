import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {selectCartItemCount} from '../../../state/features/cart/cart.selectors';
import {addCartItem} from '../../../state/features/cart/cart.actions';
import {selectBookDetailsState} from '../../../state/features/book-details/book-details.selectors';
import {BookDetailsState} from '../../../state/features/book-details/book-details.reducer';
import {clearBookDetails, loadBookDetails} from '../../../state/features/book-details/book-details.actions';
import {BooksDetailsViewModel} from '../types/view-model/books-details-view-model';
import {BookReviewsState} from '../../../state/features/book-reviews/book-reviews.reducer';
import {selectBookReviewsState} from '../../../state/features/book-reviews/book-reviews.selectors';
import {Paginator} from '../../../common/types/paginator';
import {clearBookReviewsDetails, loadBookReviewsList} from '../../../state/features/book-reviews/book-reviews.actions';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsFacadeService {
  constructor(private store: Store) {
  }

  //region Book details

  getBookDetailsState$(): Observable<BookDetailsState> {
    return this.store.select(selectBookDetailsState);
  }

  getCartItemCount$(bookId: number): Observable<number> {
    return this.store.select(selectCartItemCount(bookId));
  }

  getBookDetails(id: number): void {
    this.store.dispatch(loadBookDetails({id}));
  }

  clearBookDetails(): void {
    this.store.dispatch(clearBookDetails());
    this.store.dispatch(clearBookReviewsDetails());
  }

  addItemToCart(book: BooksDetailsViewModel): void {
    this.store.dispatch(addCartItem({
      bookId: book.id,
      bookName: book.title,
      bookPrice: book.price,
      bookPosterUrl: book.posterUrl,
      count: 1
    }));
  }

  //endregion

  //region Book reviews

  getBookReviewsState$(): Observable<BookReviewsState> {
    return this.store.select(selectBookReviewsState);
  }

  getReviewsList(bookId: number, paginator: Paginator): void {
    this.store.dispatch(loadBookReviewsList({bookId, paginator}));
  }

  //endregion
}
