import {Component, OnInit} from '@angular/core';
import {BooksListState} from '../../../../state/features/books-list/books-list.reducer';
import {BookFacadeService} from '../../services/book.facade.service';
import {ReplaySubject, takeUntil} from 'rxjs';
import {BooksListFilterViewModel} from '../../types/view-model/books-list-filter-view-model';
import {BookMapperService} from '../../services/book.mapper.service';

@Component({
  selector: 'app-view-books-list',
  templateUrl: './view-books-list.component.html',
  styleUrls: ['./view-books-list.component.scss']
})
export class ViewBooksListComponent implements OnInit {
  public booksState: BooksListState;
  public filter: BooksListFilterViewModel;
  private onDestroy = new ReplaySubject(1);

  constructor(private bookFacadeService: BookFacadeService, private bookMapperService: BookMapperService) {
    this.bookFacadeService.getBooksState$()
      .pipe(takeUntil(this.onDestroy))
      .subscribe(state => this.booksState = state);

    this.filter = this.bookMapperService.initializeBooksListFilterViewModel()
  }

  ngOnInit() {
    this.bookFacadeService.getBooksList({
      page: this.booksState.currentPage + 1,
      size: this.booksState.size
    }, this.filter);
  }
}
