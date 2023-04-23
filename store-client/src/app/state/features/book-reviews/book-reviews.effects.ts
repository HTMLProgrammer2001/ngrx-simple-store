import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of, takeUntil} from 'rxjs';
import * as BookReviewsActions from './book-reviews.actions';
import {loadBookReviewsListFailure, loadBookReviewsListSuccess} from './book-reviews.actions';
import {BookDetailsApiService} from '../../../features/book-details/services/book-details.api.service';
import {BookDetailsMapperService} from '../../../features/book-details/services/book-details.mapper.service';

@Injectable()
export class BookReviewsEffects {
  loadBookReviews$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookReviewsActions.loadBookReviewsList),
      switchMap((action) =>
        this.bookDetailsApiService.getBookReviews(action.bookId, action.paginator)
          .pipe(
            map(resp => ({
              ...resp.data,
              responseList: resp.data.responseList.map(el => this.bookDetailsMapperService.bookReviewGetModelToViewModel(el))
            })),
            map(data => loadBookReviewsListSuccess({data})),
            catchError(err => of(loadBookReviewsListFailure({error: err.message}))),
            takeUntil(this.actions$.pipe(ofType(BookReviewsActions.clearBookReviewsDetails)))
          )
      )
    );
  });

  constructor(private actions$: Actions, private bookDetailsApiService: BookDetailsApiService, private bookDetailsMapperService: BookDetailsMapperService) {
  }
}
