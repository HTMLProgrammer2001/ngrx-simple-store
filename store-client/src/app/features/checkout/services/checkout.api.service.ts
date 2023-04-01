import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CheckoutBodyModel} from '../types/model/checkout-body-model';
import {Observable, of} from 'rxjs';
import {IdCodeName} from '../../../common/types/id-code-name';
import {environment} from '../../../../environments/environment';
import {IResponse} from '../../../common/types/response';

@Injectable({
  providedIn: 'root'
})
export class CheckoutApiService {
  constructor(private httpClient: HttpClient) {
  }

  checkout$(body: CheckoutBodyModel): Observable<IResponse<boolean>> {
    return this.httpClient.post<IResponse<boolean>>(`${environment.backendUrl}/checkout`, body);
  }
}
