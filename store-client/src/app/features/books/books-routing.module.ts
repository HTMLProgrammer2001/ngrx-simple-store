import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ViewBooksListComponent} from './views/view-books-list/view-books-list.component';

const routes: Routes = [
  {
    path: '',
    component: ViewBooksListComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
