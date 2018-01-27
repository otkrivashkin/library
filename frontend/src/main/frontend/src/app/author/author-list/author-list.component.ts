import { Component, OnInit } from '@angular/core';
import {AuthorService} from "../author.service";
import {ExistingAuthor} from "../model/existing-author";
import {MatTableDataSource} from "@angular/material";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: ExistingAuthor[] = [];
  displayedColumns = ['id', 'firstName', 'actions'];
  dataSource: MatTableDataSource<ExistingAuthor>;
  subscriptions: Subscription[] = [];

  constructor(private authorService: AuthorService) { }

  ngOnInit() {
    const authorSubscriptions = this.authorService.getAuthors()
      .subscribe(data => {
        this.authors = data;
        this.dataSource = new MatTableDataSource<any>(this.authors);
      },
        error => console.log(error));
    this.subscriptions.push(authorSubscriptions);
  }



}
