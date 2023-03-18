import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BooksRoutingModule} from './books-routing.module';
import {ViewBooksListComponent} from './views/view-books-list/view-books-list.component';


@NgModule({
  declarations: [
    ViewBooksListComponent
  ],
  imports: [
    CommonModule,
    BooksRoutingModule
  ]
})
export class BooksModule { }
