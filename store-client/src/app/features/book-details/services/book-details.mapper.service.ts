import {Injectable} from '@angular/core';
import {BooksDetailsGetModel} from '../types/model/books-details-get-model';
import {BooksDetailsViewModel} from '../types/view-model/books-details-view-model';
import {BooksReviewGetModel} from '../types/model/books-review-get-model';
import {BooksReviewViewModel} from '../types/view-model/books-review-view-model';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsMapperService {
  bookDetailsGetModelToViewModel(source: BooksDetailsGetModel): BooksDetailsViewModel {
    return {
      id: source.id,
      title: source.title,
      posterUrl: source.posterUrl,
      pages: source.pages,
      price: source.price,
      leftAmount: source.leftAmount,
      reviewsCount: source.reviewsCount,
      avgMark: source.avgMark,
      author: source.author,
      genres: source.genres,
      genresString: source.genres.map(el => el.name).join(', ')
    };
  }

  bookReviewGetModelToViewModel(source: BooksReviewGetModel): BooksReviewViewModel {
    return {
      id: source.id,
      author: source.author,
      content: source.content,
      date: source.date,
      mark: source.mark
    };
  }
}
