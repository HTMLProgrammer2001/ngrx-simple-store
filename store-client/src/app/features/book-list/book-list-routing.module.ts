import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ViewBookListComponent} from './views/view-book-list/view-book-list.component';

const routes: Routes = [
  {
    path: '',
    component: ViewBookListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookListRoutingModule { }
