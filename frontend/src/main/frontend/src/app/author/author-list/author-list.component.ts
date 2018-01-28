import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthorService} from "../author.service";
import {Author} from "../model/author";
import {MatTableDataSource} from "@angular/material";
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  authors: Author[] = [];

  displayedColumns = ['id', 'firstName', 'lastName', 'actions'];
  dataSource: MatTableDataSource<Author>;
  subscriptions: Subscription[] = [];

  constructor(private authorService: AuthorService,
              private router: Router) { }

  ngOnInit() {
    const authorSubscriptions = this.authorService.getAuthors()
      .subscribe(data => {
        this.authors = data;
        this.dataSource = new MatTableDataSource<any>(this.authors);
      },
        error => console.log(error));
    this.subscriptions.push(authorSubscriptions);
  }

  onAuthorSelect(id: number): void {
    this.router.navigateByUrl(`authors/${id}`);
  }

  onAuthorDelete(id: number, index: number): void {
    this.authorService.deleteAuthorById(id).subscribe(
      success => {
        this.authors.splice(index, 1);
        this.dataSource = new MatTableDataSource(this.authors);
      },
      error => console.log(error));
  }

  onAuthorCreate() {

  }



}
