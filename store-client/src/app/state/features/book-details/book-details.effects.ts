import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of, takeUntil} from 'rxjs';
import * as BookDetailsActions from './book-details.actions';
import {loadBookDetailsFailure, loadBookDetailsSuccess} from './book-details.actions';
import {BookDetailsApiService} from '../../../features/book-details/services/book-details.api.service';
import {BookDetailsMapperService} from '../../../features/book-details/services/book-details.mapper.service';


@Injectable()
export class BookDetailsEffects {
  loadBookDetails$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BookDetailsActions.loadBookDetails),
      switchMap((action) =>
        this.bookDetailsApiService.getBookDetails(action.id)
          .pipe(
            map(resp => this.bookDetailsMapperService.bookDetailsGetModelToViewModel(resp.data)),
            map(data => loadBookDetailsSuccess({data})),
            catchError(err => of(loadBookDetailsFailure({error: err.message}))),
            takeUntil(this.actions$.pipe(ofType(BookDetailsActions.clearBookDetails)))
          )
      )
    );
  });

  constructor(private actions$: Actions, private bookDetailsApiService: BookDetailsApiService, private bookDetailsMapperService: BookDetailsMapperService) {
  }
}
