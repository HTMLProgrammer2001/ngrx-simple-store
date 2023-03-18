import {Injectable} from '@angular/core';
import {BooksListFilterModel} from '../types/model/books-list-filter-model';
import {BooksListFilterViewModel} from '../types/view-model/books-list-filter-view-model';
import {BooksListGetModel} from '../types/model/books-list-get-model';
import {BooksListViewModel} from '../types/view-model/books-list-view-model';

@Injectable({
  providedIn: 'root'
})
export class BookMapperService {
  initializeBooksListFilterViewModel(): BooksListFilterViewModel {
    return {
      title: null,
      markTo: null,
      markFrom: null,
      priceFrom: null,
      priceTo: null,
      available: false,
      genres: [],
      authors: []
    };
  }

  booksListFilterModelToViewModel(source: BooksListFilterViewModel): BooksListFilterModel {
    return {
      title: source.title,
      available: source.available,
      genres: source.genres,
      markFrom: source.markFrom,
      markTo: source.markTo,
      priceFrom: source.priceFrom,
      priceTo: source.priceTo,
      authors: source.authors
    };
  }

  booksListModelToViewModel(source: BooksListGetModel): BooksListViewModel {
    return {
      id: source.id,
      title: source.title,
      posterUrl: source.posterUrl,
      pages: source.pages,
      price: source.price,
      leftAmount: source.leftAmount,
      author: source.author,
      genres: source.genres,
      reviewsCount: source.reviewsCount,
      avgMark: source.avgMark
    };
  }
}
