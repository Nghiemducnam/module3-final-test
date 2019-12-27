import { Component, OnInit } from '@angular/core';
import {IBook} from '../services/models/IBook';
import {BookService} from '../services/book.service';

@Component({
  selector: 'app-book-readed',
  templateUrl: './book-readed.component.html',
  styleUrls: ['./book-readed.component.css']
})
export class BookReadedComponent implements OnInit {

  bookList: IBook[] = [];
  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.bookService
      .getAllBooks()
      .subscribe(next => (this.bookList = next)
        , error => (this.bookList = []));
  }

  changeStatus(book: IBook) {
    book.read = !book.read;
    this.bookService.editBook(book).subscribe(() => {
      alert('Thay đổi thành công!');
    });
  }
}
