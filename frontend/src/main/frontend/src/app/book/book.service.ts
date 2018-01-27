import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Book} from "./model/book";

@Injectable()
export class BookService {

  constructor(private httpClient: HttpClient) { }

  findBookById(id: number): Observable<Book> {
    return this.httpClient.get<Book>(`http://localhost:8080/api/books/${id}`);
  }

  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`http://localhost:8080/api/books`);
  }
}
