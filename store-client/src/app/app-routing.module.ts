import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './common/components/layout/layout.component';
import {NotFoundComponent} from './common/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: '/books'
      },
      {
        path: 'books',
        loadChildren: () => import('./features/book-list/book-list.module').then(({BookListModule}) => BookListModule)
      },
      {
        path: 'books/:id',
        loadChildren: () => import('./features/book-details/book-details.module').then(({BookDetailsModule}) => BookDetailsModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('./features/cart/cart.module').then(({CartModule}) => CartModule)
      },
      {
        path: 'checkout',
        loadChildren: () => import('./features/checkout/checkout.module').then(({CheckoutModule}) => CheckoutModule)
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
