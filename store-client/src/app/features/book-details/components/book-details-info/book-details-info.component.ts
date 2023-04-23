import {Component, EventEmitter, Input, Output} from '@angular/core';
import {BooksDetailsViewModel} from '../../types/view-model/books-details-view-model';

@Component({
  selector: 'app-book-details-info',
  templateUrl: './book-details-info.component.html',
  styleUrls: ['./book-details-info.component.scss']
})
export class BookDetailsInfoComponent {
  @Input() bookDetails: BooksDetailsViewModel;
  @Input() cartItemCount: number;
  @Output() addToCart: EventEmitter<void> = new EventEmitter<void>();
}
