import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';

import {BookDetailsEffects} from './book-details.effects';

describe('BookDetailsEffects', () => {
  let actions$: Observable<any>;
  let effects: BookDetailsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookDetailsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(BookDetailsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
