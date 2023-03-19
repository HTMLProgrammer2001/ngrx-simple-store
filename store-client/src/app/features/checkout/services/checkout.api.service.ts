import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CheckoutApiService {
  constructor(private httpClient: HttpClient) {
  }
}
