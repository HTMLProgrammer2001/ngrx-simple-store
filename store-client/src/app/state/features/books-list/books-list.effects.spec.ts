import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { BooksListEffects } from './books-list.effects';

describe('BooksListEffects', () => {
  let actions$: Observable<any>;
  let effects: BooksListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BooksListEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(BooksListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
