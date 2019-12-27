import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IBook} from './models/IBook';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:8081/books';

  constructor(private http: HttpClient) {
  }

  getAllBooks(): Observable<IBook[]> {
    return this.http.get<IBook[]>(this.API_URL);
  }

  getBookById(id: string): Observable<IBook> {
    return this.http.get<IBook>(this.API_URL + id);
  }

  createBook(book: IBook): Observable<any> {
    return this.http.post(this.API_URL, book);
  }

  editBook(book: IBook): Observable<any> {
    return this.http.put(this.API_URL, book);
  }
}
