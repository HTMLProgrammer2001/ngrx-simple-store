import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import * as BooksActions from './books-list.actions';
import {
  initializeBooksListFailure,
  initializeBooksListSuccess,
  loadBooksList,
  loadBooksListFailure,
  loadBooksListSuccess
} from './books-list.actions';
import {BookListApiService} from '../../../features/book-list/services/book-list.api.service';
import {BookListMapperService} from '../../../features/book-list/services/book-list.mapper.service';
import {forkJoin, of, takeUntil} from 'rxjs';
import {environment} from '../../../../environments/environment';


@Injectable()
export class BooksListEffects {
  loadBooksList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksActions.loadBooksList),
      switchMap((action) =>
        this.bookApiService.getBooksList(action.paginator, this.bookMapperService.booksListFilterModelToViewModel(action.filter))
          .pipe(
            map(resp => ({
              ...resp.data,
              responseList: resp.data.responseList.map(el => this.bookMapperService.booksListModelToViewModel(el))
            })),
            map(data => loadBooksListSuccess({data})),
            catchError(err => of(loadBooksListFailure({error: err.message}))),
            takeUntil(this.actions$.pipe(ofType(BooksActions.resetBooksListState, BooksActions.clearBooksList)))
          )
      )
    );
  });

  initializeBooksList$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BooksActions.initializeBooksList),
      switchMap((action) =>
        forkJoin({
          authors: this.bookApiService.getAuthors().pipe(map(resp => resp.data)),
          genres: this.bookApiService.getGenres().pipe(map(resp => resp.data))
        }).pipe(
          switchMap(resp => of(initializeBooksListSuccess(resp), loadBooksList({
            paginator: {page: 1, size: environment.defaultPageSize},
            filter: this.bookMapperService.initializeBooksListFilterViewModel()
          }))),
          catchError(err => of(initializeBooksListFailure({error: err.message}))),
          takeUntil(this.actions$.pipe(ofType(BooksActions.resetBooksListState)))
        )
      )
    );
  });

  constructor(private actions$: Actions, private bookApiService: BookListApiService, private bookMapperService: BookListMapperService) {
  }
}
