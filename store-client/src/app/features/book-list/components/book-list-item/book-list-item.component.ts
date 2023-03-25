import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {BooksListViewModel} from '../../types/view-model/books-list-view-model';
import {BookListFacadeService} from '../../services/book-list.facade.service';
import {ReplaySubject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent implements OnInit, OnDestroy {
  @Input() book: BooksListViewModel;

  public cartItemCount = 0;
  private onDestroy = new ReplaySubject(1);

  constructor(private bookFacadeService: BookListFacadeService) {
  }

  ngOnInit() {
    this.bookFacadeService.getCartItemCount$(this.book.id)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(cartItemCount => this.cartItemCount = cartItemCount);
  }

  ngOnDestroy() {
    this.onDestroy.next(null);
    this.onDestroy.complete();
  }

  addToCart() {
    this.bookFacadeService.addItemToCart(this.book);
  }
}
