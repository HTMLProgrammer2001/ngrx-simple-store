import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {BookDetailsRoutingModule} from './book-details-routing.module';
import {ViewBookDetailsComponent} from './views/view-book-details/view-book-details.component';
import {SharedModule} from '../../common/shared.module';
import {BookDetailsInfoComponent} from './components/book-details-info/book-details-info.component';
import {BookDetailsReviewsComponent} from './components/book-details-reviews/book-details-reviews.component';


@NgModule({
  declarations: [
    ViewBookDetailsComponent,
    BookDetailsInfoComponent,
    BookDetailsReviewsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BookDetailsRoutingModule
  ]
})
export class BookDetailsModule { }
