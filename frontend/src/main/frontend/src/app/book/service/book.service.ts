import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Book} from "../model/book";
import {NewBook} from "../model/new-book";

@Injectable()
export class BookService {

  constructor(private httpClient: HttpClient) { }

  findBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`http://localhost:8080/api/books/${id}`);
  }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`http://localhost:8080/api/books`);
  }

  createBook(newBook: NewBook): Observable<Book> {
    return this.httpClient.post<Book>('http://localhost:8080/api/books', newBook);
  }
}
