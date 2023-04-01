import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, filter, map, switchMap} from 'rxjs/operators';
import * as CheckoutActions from './checkout.actions';
import {CheckoutApiService} from '../../../features/checkout/services/checkout.api.service';
import {CheckoutMapperService} from '../../../features/checkout/services/checkout.mapper.service';
import {of, takeUntil} from 'rxjs';
import {Router} from '@angular/router';
import {resetCartItem} from '../cart/cart.actions';
import {ResponseStatus} from '../../../common/types/response-status';


@Injectable()
export class CheckoutEffects {
  checkout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CheckoutActions.checkoutStart),
      switchMap((action) =>
        this.checkoutApiService.checkout$(this.checkoutMapperService.checkoutBodyViewModelToModel(action.body))
          .pipe(
            map(resp => {
              if (resp.status === ResponseStatus.Ok) {
                this.router.navigate(['/']);
                return resetCartItem();
              } else {
                alert(`Error ${resp.errors.join(', ')}`)
                return null;
              }
            }),
            catchError(err => {
              alert(`Error ${err.message}`);
              return of(null);
            }),
            filter(action => !!action),
            takeUntil(this.actions$.pipe(ofType(CheckoutActions.checkoutStart)))
          )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private router: Router,
    private checkoutApiService: CheckoutApiService,
    private checkoutMapperService: CheckoutMapperService
  ) {
  }
}
