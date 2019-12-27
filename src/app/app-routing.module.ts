import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookReadedComponent} from './book-readed/book-readed.component';


const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent
  },
  {
    path: '', component: BookListComponent
  },
  {
    path: 'book-read', component: BookReadedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
