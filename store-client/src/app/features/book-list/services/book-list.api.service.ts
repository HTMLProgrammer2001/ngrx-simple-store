import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Paginator} from '../../../shared/types/paginator';
import {BooksListFilterModel} from '../types/model/books-list-filter-model';
import {BooksListGetModel} from '../types/model/books-list-get-model';
import {Observable} from 'rxjs';
import {PaginatedResponse} from '../../../shared/types/paginated-response';
import {IdCodeName} from '../../../shared/types/id-code-name';

@Injectable({
  providedIn: 'root'
})
export class BookListApiService {
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

  getAuthors(): Observable<Array<IdCodeName>> {
    return this.httpClient.get<Array<IdCodeName>>(`${environment.backendUrl}/authors`);
  }

  getGenres(): Observable<Array<IdCodeName>> {
    return this.httpClient.get<Array<IdCodeName>>(`${environment.backendUrl}/genres`);
  }
}
