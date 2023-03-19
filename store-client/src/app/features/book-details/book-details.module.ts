import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookDetailsRoutingModule} from './book-details-routing.module';
import {ViewBookDetailsComponent} from './views/view-book-details/view-book-details.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    ViewBookDetailsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookDetailsRoutingModule
  ]
})
export class BookDetailsModule { }
