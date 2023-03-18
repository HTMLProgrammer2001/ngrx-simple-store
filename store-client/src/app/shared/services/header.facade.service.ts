import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderFacadeService {
  constructor(private store: Store) {
  }

  getHeaderData(): Observable<HeaderData> {
    return this.store.select(state => ({
      totalCount: 0,
      totalPrice: 0
    }));
  }
}

export interface HeaderData {
  totalCount: number;
  totalPrice: number;
}
