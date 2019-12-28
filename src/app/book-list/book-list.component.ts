import { Component, OnInit } from '@angular/core';
import {BookService} from '../services/book.service';
import {IBook} from '../models/IBook';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  bookList: IBook[] = [];
  private createForm: FormGroup;
  constructor(private bookService: BookService, private fb: FormBuilder) { }
  ngOnInit() {
    this.bookService
      .getAllBooks()
      .subscribe(next => (this.bookList = next)
        , error => (this.bookList = []));

    this.createForm = this.fb.group({
      name: ['']
    });
  }

  changeStatus(book: IBook) {
    book.read = !book.read;
    this.bookService.editBook(book).subscribe(() => {
      alert('Thay đổi thành công!');
    });
  }

  addBook() {
    const name = this.createForm.value.name;
      const book: IBook = {
        id: this.createForm.value.id,
        name: this.createForm.value.name,
        read: false
      };
      this.bookService.createBook(book).subscribe(() => {
        alert ('Tạo mới thành công');
        this.bookList.push(book);
        this.createForm.reset();
      }, () => {
        alert('Tạo mới thất bại');
      });
    }
}
