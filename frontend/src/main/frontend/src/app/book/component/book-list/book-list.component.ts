import {Component, OnInit} from '@angular/core';
import {Book} from "../../model/book";
import {MatDialog, MatTableDataSource} from "@angular/material";
import {Subscription} from "rxjs/Subscription";
import {BookService} from "../../service/book.service";
import {Router} from "@angular/router";
import {BookDialogNewComponent} from "../book-dialog-new/book-dialog-new.component";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  displayedColumns = ['id', 'title', 'genre', 'author', 'publicationDate', 'actions'];
  dataSource: MatTableDataSource<Book>;
  subscriptions: Subscription[] = [];

  constructor(private bookService: BookService,
              private router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit() {
    const bookSubscriptions = this.bookService.getBooks()
      .subscribe(data => {
          this.books = data;
          this.dataSource = new MatTableDataSource<Book>(this.books)
        },
        error => console.log(error));
    this.subscriptions.push(bookSubscriptions)
  }

  onBookSelect(id: number): void {
    this.router.navigateByUrl(`books/${id}`);
  }

  onBookCreate(): void {
    let dialogRef = this.dialog.open(BookDialogNewComponent, {
      width: '250px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.bookService.createBook(result).subscribe(
          data => {
            this.books.push(
              {
                id: data.id,
                title: data.title,
                genre: data.genre,
                publicationDate: data.publicationDate,
                author: data.author
              }
            );
            this.updateDataSource();
          },
          error => console.log(error)
        )
      }
      console.log('The dialog was closed');
      console.log('Book = ', result)
    });
  }

  onBookDelete(id: number, index: number): void {
    this.bookService.deleteBookById(id)
      .subscribe(result => {
          this.books.splice(index, 1);
          this.updateDataSource();
        },
        error => console.log(error));
  }

  onBookEdit(id: number): void {
    this.router.navigateByUrl(`books/edit/${id}`)
  }

  updateDataSource(): void {
    this.dataSource = new MatTableDataSource(this.books);
  }

}
