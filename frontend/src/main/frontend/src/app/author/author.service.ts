import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {ExistingAuthor} from "./model/existing-author";

@Injectable()
export class AuthorService {

  constructor(private httpClient: HttpClient) { }

  getAuthors(): Observable<ExistingAuthor[]> {
    return this.httpClient.get<ExistingAuthor[]>('http://localhost:8080/api/authors');
  }
}
