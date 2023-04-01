import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {CartTotalData, selectCartTotalData} from '../../../state/features/cart/cart.selectors';

@Injectable({
  providedIn: 'root'
})
export class HeaderFacadeService {
  constructor(private store: Store) {
  }

  getHeaderData(): Observable<CartTotalData> {
    return this.store.select(selectCartTotalData);
  }
}
