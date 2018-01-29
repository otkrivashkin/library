import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Author} from "../model/author";
import {NewAuthor} from "../model/new-author";

@Injectable()
export class AuthorService {

  constructor(private httpClient: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    return this.httpClient.get<Author[]>('/api/authors');
  }

  findAuthorById(id: number): Observable<Author> {
    return this.httpClient.get<Author>(`/api/authors/${id}`);
  }

  deleteAuthorById(id: number): Observable<Response> {
    return this.httpClient.delete<Response>(`/api/authors/${id}`);
  }

  createAuthor(newAuthor: NewAuthor): Observable<Author> {
    return this.httpClient.post<Author>('/api/authors', newAuthor);
  }

  editAuthor(author: Author): Observable<Response> {
    return this.httpClient.put<Response>('/api/authors', author);
  }
}
