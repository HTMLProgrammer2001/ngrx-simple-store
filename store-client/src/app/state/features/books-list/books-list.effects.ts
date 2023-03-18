import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as BooksActions from './books-list.actions';
import {loadBooksListFailure, loadBooksListSuccess} from './books-list.actions';
import {BookApiService} from '../../../features/books/services/book.api.service';
import {BookMapperService} from '../../../features/books/services/book.mapper.service';
import {of, takeUntil} from 'rxjs';


@Injectable()
export class BooksListEffects {
  loadBooksList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksActions.loadBooksList),
      switchMap((action) =>
        this.bookApiService.getBooksList(action.paginator, this.bookMapperService.booksListFilterModelToViewModel(action.filter))
          .pipe(
            map(resp => ({
              ...resp,
              responseList: resp.responseList.map(el => this.bookMapperService.booksListModelToViewModel(el))
            })),
            map(data => loadBooksListSuccess({data})),
            catchError(err => of(loadBooksListFailure({error: err.message}))),
            takeUntil(this.actions$.pipe(ofType(BooksActions.resetBooksList)))
          )
      )
    );
  });

  constructor(private actions$: Actions, private bookApiService: BookApiService, private bookMapperService: BookMapperService) {
  }
}
