import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ReplaySubject, takeUntil} from 'rxjs';
import {BookDetailsFacadeService} from '../../services/book-details.facade.service';
import {BookDetailsMapperService} from '../../services/book-details.mapper.service';
import {BookDetailsState} from '../../../../state/features/book-details/book-details.reducer';
import {BookReviewsState} from '../../../../state/features/book-reviews/book-reviews.reducer';
import {Paginator} from '../../../../common/types/paginator';

@Component({
  selector: 'app-view-book-details',
  templateUrl: './view-book-details.component.html',
  styleUrls: ['./view-book-details.component.scss']
})
export class ViewBookDetailsComponent implements OnInit, OnDestroy {
  public bookDetailsState: BookDetailsState;
  public bookReviewsState: BookReviewsState;
  public cartItemCount: number;
  public bookId: number;
  private onDestroy = new ReplaySubject(1);

  constructor(
    private route: ActivatedRoute,
    private bookDetailsFacadeService: BookDetailsFacadeService,
    private bookDetailsMapperService: BookDetailsMapperService
  ) {
    this.bookId = Number(this.route.snapshot.paramMap.get('id'));

    this.bookDetailsFacadeService.getBookDetailsState$()
      .pipe(takeUntil(this.onDestroy))
      .subscribe(state => this.bookDetailsState = state);

    this.bookDetailsFacadeService.getCartItemCount$(this.bookId)
      .pipe(takeUntil(this.onDestroy))
      .subscribe(cartItemCount => this.cartItemCount = cartItemCount);

    this.bookDetailsFacadeService.getBookReviewsState$()
      .pipe(takeUntil(this.onDestroy))
      .subscribe(state => this.bookReviewsState = state);
  }

  ngOnInit() {
    this.bookDetailsFacadeService.getBookDetails(this.bookId);
  }

  ngOnDestroy() {
    this.onDestroy.next(null);
    this.onDestroy.complete();
    this.bookDetailsFacadeService.clearBookDetails();
  }

  addToCart() {
    this.bookDetailsFacadeService.addItemToCart(this.bookDetailsState.book);
  }

  loadReviewPage(paginator: Paginator) {
    this.bookDetailsFacadeService.getReviewsList(this.bookId, paginator);
  }
}
