import {Component, OnDestroy, OnInit} from '@angular/core';
import {BooksListState} from '../../../../state/features/books-list/books-list.reducer';
import {BookListFacadeService} from '../../services/book-list.facade.service';
import {ReplaySubject, takeUntil} from 'rxjs';
import {BooksListFilterViewModel} from '../../types/view-model/books-list-filter-view-model';
import {BookListMapperService} from '../../services/book-list.mapper.service';

@Component({
  selector: 'app-view-book-list',
  templateUrl: './view-book-list.component.html',
  styleUrls: ['./view-book-list.component.scss']
})
export class ViewBookListComponent implements OnInit, OnDestroy {
  public booksState: BooksListState;
  public filter: BooksListFilterViewModel;
  private onDestroy = new ReplaySubject(1);

  constructor(private bookFacadeService: BookListFacadeService, private bookMapperService: BookListMapperService) {
    this.bookFacadeService.getBooksListState$()
      .pipe(takeUntil(this.onDestroy))
      .subscribe(state => this.booksState = state);

    this.filter = this.bookMapperService.initializeBooksListFilterViewModel();
  }

  ngOnInit() {
    this.bookFacadeService.initializeBooksList();
  }

  ngOnDestroy() {
    this.onDestroy.next(null);
    this.onDestroy.complete();
    this.bookFacadeService.clearBooksList();
  }

  onFilterChange() {
    this.bookFacadeService.clearBooksList();
    this.bookFacadeService.getBooksList({
      page: 1,
      size: this.booksState.size,
    }, this.filter);
  }

  loadMore() {
    this.bookFacadeService.getBooksList({
      page: this.booksState.currentPage + 1,
      size: this.booksState.size
    }, this.filter);
  }
}
