import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';

import {BookReviewsEffects} from './book-reviews.effects';

describe('BookReviewsEffects', () => {
  let actions$: Observable<any>;
  let effects: BookReviewsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookReviewsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(BookReviewsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
