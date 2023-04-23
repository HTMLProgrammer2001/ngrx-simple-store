import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs';

import {CheckoutEffects} from './checkout.effects';

describe('CheckoutEffects', () => {
  let actions$: Observable<any>;
  let effects: CheckoutEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CheckoutEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CheckoutEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
