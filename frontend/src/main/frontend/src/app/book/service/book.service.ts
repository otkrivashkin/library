import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Book} from "../model/book";
import {NewBook} from "../model/new-book";

@Injectable()
export class BookService {

  constructor(private httpClient: HttpClient) { }

  findBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`/api/books/${id}`);
  }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`/api/books`);
  }

  createBook(newBook: NewBook): Observable<Book> {
    return this.httpClient.post<Book>('/api/books', newBook);
  }

  deleteBookById(id: number): Observable<Response> {
    return this.httpClient.delete<Response>(`/api/books/${id}`);
  }

  editBook(book: Book): Observable<Response> {
    return this.httpClient.put<Response>('/api/books', book);
  }
}
