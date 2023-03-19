import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class BookDetailsFacadeService {
  constructor(private store: Store) {
  }


}
