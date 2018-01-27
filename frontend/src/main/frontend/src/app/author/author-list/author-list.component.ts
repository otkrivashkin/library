import { Component, OnInit } from '@angular/core';
import {AuthorService} from "../author.service";
import {ExistingAuthor} from "../model/existing-author";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: ExistingAuthor[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    this.authorService.getAuthors().subscribe(data => this.authors = data);
  }

}
