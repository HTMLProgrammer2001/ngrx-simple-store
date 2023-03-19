import {Component, Input} from '@angular/core';
import {BooksListViewModel} from '../../types/view-model/books-list-view-model';
import {BookListFacadeService} from '../../services/book-list.facade.service';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent {
  @Input() book: BooksListViewModel;

  constructor(private bookFacadeService: BookListFacadeService) {
  }

  addToCart() {
    this.bookFacadeService.addItemToCart(this.book);
  }
}
