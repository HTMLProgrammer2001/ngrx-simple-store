import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewBookDetailsComponent} from './views/view-book-details/view-book-details.component';

const routes: Routes = [
  {
    path: '',
    component: ViewBookDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookDetailsRoutingModule { }
