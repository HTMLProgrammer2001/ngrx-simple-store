import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BookReviewsState} from '../../../../state/features/book-reviews/book-reviews.reducer';
import {Paginator} from '../../../../common/types/paginator';
import {environment} from '../../../../../environments/environment';

@Component({
  selector: 'app-book-details-reviews',
  templateUrl: './book-details-reviews.component.html',
  styleUrls: ['./book-details-reviews.component.scss']
})
export class BookDetailsReviewsComponent implements OnInit {
  @Input() reviewState: BookReviewsState;
  @Output() loadPage: EventEmitter<Paginator> = new EventEmitter<Paginator>();

  ngOnInit() {
    this.loadPage.emit({
      page: 1,
      size: environment.defaultPageSize
    });
  }

  loadMore() {
    this.loadPage.emit({
      page: this.reviewState.currentPage + 1,
      size: this.reviewState.size
    });
  }
}
