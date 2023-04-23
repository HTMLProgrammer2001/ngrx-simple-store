import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './common/shared.module';
import {BooksListEffects} from './state/features/books-list/books-list.effects';
import {CheckoutEffects} from './state/features/checkout/checkout.effects';
import {NotFoundComponent} from './common/components/not-found/not-found.component';
import {saveCartStateMetaReducer} from './state/common/meta-reducers/save-cart-state.meta-reducer';
import {reducers} from './state';
import {BookDetailsEffects} from './state/features/book-details/book-details.effects';
import {BookReviewsEffects} from './state/features/book-reviews/book-reviews.effects';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {
      metaReducers: [saveCartStateMetaReducer as any],
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true,
        strictActionWithinNgZone: true,
        strictActionTypeUniqueness: true,
      }
    }),
    EffectsModule.forRoot([BooksListEffects, CheckoutEffects, BookDetailsEffects, BookReviewsEffects]),
    StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
