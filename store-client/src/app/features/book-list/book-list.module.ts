import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookListRoutingModule} from './book-list-routing.module';
import {ViewBookListComponent} from './views/view-book-list/view-book-list.component';
import {BookListItemComponent} from './components/book-list-item/book-list-item.component';
import {BookListFilterComponent} from './components/book-list-filter/book-list-filter.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    ViewBookListComponent,
    BookListItemComponent,
    BookListFilterComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookListRoutingModule
  ]
})
export class BookListModule { }
