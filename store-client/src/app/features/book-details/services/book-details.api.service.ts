import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Paginator} from '../../../common/types/paginator';
import {Observable} from 'rxjs';
import {PaginatedResponse} from '../../../common/types/paginated-response';
import {BooksDetailsGetModel} from '../types/model/books-details-get-model';
import {BooksReviewGetModel} from '../types/model/books-review-get-model';
import {IResponse} from '../../../common/types/response';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsApiService {
  constructor(private httpClient: HttpClient) {
  }

  getBookDetails(id: number): Observable<IResponse<BooksDetailsGetModel>> {
    return this.httpClient.get<IResponse<BooksDetailsGetModel>>(`${environment.backendUrl}/books/${id}`);
  }

  getBookReviews(bookId: number, paginator: Paginator): Observable<IResponse<PaginatedResponse<BooksReviewGetModel>>> {
    return this.httpClient.get<IResponse<PaginatedResponse<BooksReviewGetModel>>>(`${environment.backendUrl}/books/${bookId}/reviews`, {
      params: {...paginator}
    });
  }
}
