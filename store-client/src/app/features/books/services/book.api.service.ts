import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Paginator} from '../../../shared/types/paginator';
import {BooksListFilterModel} from '../types/model/books-list-filter-model';
import {BooksListGetModel} from '../types/model/books-list-get-model';
import {Observable} from 'rxjs';
import {PaginatedResponse} from '../../../shared/types/paginated-response';
import {BooksDetailsGetModel} from '../types/model/books-details-get-model';
import {BooksReviewGetModel} from '../types/model/books-review-get-model';
import {IdCodeName} from '../../../shared/types/id-code-name';

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  constructor(private httpClient: HttpClient) {
  }

  getBooksList(paginator: Paginator, filter: BooksListFilterModel): Observable<PaginatedResponse<BooksListGetModel>> {
    const params: Record<string, any> = {
      ...paginator,
      ...filter
    };

    Object.keys(params).forEach(key => {
      if(params[key] === null || params[key] === undefined) {
        delete params[key];
      }
    });

    return this.httpClient.get<PaginatedResponse<BooksListGetModel>>(`${environment.backendUrl}/books`, {params});
  }

  getBookDetails(id: number): Observable<BooksDetailsGetModel> {
    return this.httpClient.get<BooksDetailsGetModel>(`${environment.backendUrl}/books/${id}`);
  }

  getBookReviews(bookId: number, paginator: Paginator): Observable<PaginatedResponse<BooksReviewGetModel>> {
    return this.httpClient.get<PaginatedResponse<BooksReviewGetModel>>(`${environment.backendUrl}/books/${bookId}/reviews`, {
      params: {...paginator}
    });
  }

  getAuthors(): Observable<Array<IdCodeName>> {
    return this.httpClient.get<Array<IdCodeName>>(`${environment.backendUrl}/authors`);
  }

  getGenres(): Observable<Array<IdCodeName>> {
    return this.httpClient.get<Array<IdCodeName>>(`${environment.backendUrl}/genres`);
  }
}
