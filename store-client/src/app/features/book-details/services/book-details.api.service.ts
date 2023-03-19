import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Paginator} from '../../../shared/types/paginator';
import {Observable} from 'rxjs';
import {PaginatedResponse} from '../../../shared/types/paginated-response';
import {BooksDetailsGetModel} from '../types/model/books-details-get-model';
import {BooksReviewGetModel} from '../types/model/books-review-get-model';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsApiService {
  constructor(private httpClient: HttpClient) {
  }

  getBookDetails(id: number): Observable<BooksDetailsGetModel> {
    return this.httpClient.get<BooksDetailsGetModel>(`${environment.backendUrl}/books/${id}`);
  }

  getBookReviews(bookId: number, paginator: Paginator): Observable<PaginatedResponse<BooksReviewGetModel>> {
    return this.httpClient.get<PaginatedResponse<BooksReviewGetModel>>(`${environment.backendUrl}/books/${bookId}/reviews`, {
      params: {...paginator}
    });
  }
}
