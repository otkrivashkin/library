import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthorService} from "../../service/author.service";
import {Author} from "../../model/author";
import {MatDialog, MatTableDataSource} from "@angular/material";
import {Subscription} from "rxjs/Subscription";
import {Router} from "@angular/router";
import {AuthorDialogNewComponent} from "../author-dialog-new/author-dialog-new.component";

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
              private router: Router,
              private dialog: MatDialog) {
  }

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

  onAuthorCreate(): void {
    let dialogRef = this.dialog.open(AuthorDialogNewComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.authorService.createAuthor(result).subscribe(
          data => {
            this.authors.push(
              {id: data.id, firstName: data.firstName, lastName: data.lastName, books: data.books}
            );
            this.updateDataSource();
          },
          error => console.log(error)
        )
      }
      console.log('The dialog was closed');
      console.log('Author = ', result)
    });
  }

  onAuthorEdit(id: number): void {
    this.router.navigateByUrl(`authors/edit/${id}`);
  }

  updateDataSource(): void {
    this.dataSource = new MatTableDataSource(this.authors);
  }

}
