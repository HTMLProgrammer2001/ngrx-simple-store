import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {BooksListFilterViewModel} from '../../types/view-model/books-list-filter-view-model';
import {BookListFacadeService} from '../../services/book-list.facade.service';
import {ReplaySubject, takeUntil} from 'rxjs';
import {IdCodeName} from '../../../../shared/types/id-code-name';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-book-list-filter',
  templateUrl: './book-list-filter.component.html',
  styleUrls: ['./book-list-filter.component.scss']
})
export class BookListFilterComponent implements OnInit, OnDestroy {
  @Input() filter: BooksListFilterViewModel;
  @Output() filterChange: EventEmitter<BooksListFilterViewModel> = new EventEmitter<BooksListFilterViewModel>();

  public filterData: {authors: Array<IdCodeName>, genres: Array<IdCodeName>};
  public formGroup: FormGroup;
  private onDestroy = new ReplaySubject(1);

  constructor(private bookFacadeService: BookListFacadeService, private fb: FormBuilder) {
    this.bookFacadeService.getBooksListFilterState$()
      .pipe(takeUntil(this.onDestroy))
      .subscribe(data => this.filterData = data);
  }

  ngOnInit() {
    this.formGroup = this.fb.group({
      title: [this.filter.title, {
        updateOn: 'blur'
      }],
      available: [this.filter.available],
      priceFrom: [this.filter.priceFrom, [Validators.min(0), Validators.max(9999)]],
      priceTo: [this.filter.priceTo, [Validators.min(0), Validators.max(9999)]],
      markFrom: [this.filter.priceFrom, [Validators.min(0), Validators.max(5)]],
      markTo: [this.filter.priceTo, [Validators.min(0), Validators.max(5)]],
      authors: this.fb.array(this.filterData.authors.map(el => this.fb.control(this.filter.authors.includes(el.code)))),
      genres: this.fb.array(this.filterData.genres.map(el => this.fb.control(this.filter.genres.includes(el.code)))),
    });
  }

  ngOnDestroy() {
    this.onDestroy.next(null);
    this.onDestroy.complete();
  }

  onFilterChange() {
    this.formGroup.markAllAsTouched();

    if (this.formGroup.valid) {
      const value = this.formGroup.value;

      this.filterChange.emit({
        ...value,
        authors: this.filterData.authors.map((el, index) => value.authors[index] ? el.code : null).filter(el => !!el),
        genres: this.filterData.genres.map((el, index) => value.genres[index] ? el.code : null).filter(el => !!el),
      });
    }
    else {
      alert('Errors occur');
    }
  }
}
