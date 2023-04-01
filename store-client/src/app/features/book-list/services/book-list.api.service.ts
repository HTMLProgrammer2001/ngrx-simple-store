import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment';
import {Paginator} from '../../../common/types/paginator';
import {BooksListFilterModel} from '../types/model/books-list-filter-model';
import {BooksListGetModel} from '../types/model/books-list-get-model';
import {Observable} from 'rxjs';
import {PaginatedResponse} from '../../../common/types/paginated-response';
import {IdCodeName} from '../../../common/types/id-code-name';
import {IResponse} from '../../../common/types/response';

@Injectable({
  providedIn: 'root'
})
export class BookListApiService {
  constructor(private httpClient: HttpClient) {
  }

  getBooksList(paginator: Paginator, filter: BooksListFilterModel): Observable<IResponse<PaginatedResponse<BooksListGetModel>>> {
    const params: Record<string, any> = {
      ...paginator,
      ...filter
    };

    Object.keys(params).forEach(key => {
      if(params[key] === null || params[key] === undefined) {
        delete params[key];
      }
    });

    return this.httpClient.get<IResponse<PaginatedResponse<BooksListGetModel>>>(`${environment.backendUrl}/books`, {params});
  }

  getAuthors(): Observable<IResponse<Array<IdCodeName>>> {
    return this.httpClient.get<IResponse<Array<IdCodeName>>>(`${environment.backendUrl}/authors`);
  }

  getGenres(): Observable<IResponse<Array<IdCodeName>>> {
    return this.httpClient.get<IResponse<Array<IdCodeName>>>(`${environment.backendUrl}/genres`);
  }
}
