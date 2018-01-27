import { Component, OnInit } from '@angular/core';
import {Book} from "../model/book";
import {MatTableDataSource} from "@angular/material";
import {Subscription} from "rxjs/Subscription";
import {BookService} from "../book.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];

  displayedColumns = ['id', 'title', 'genre', 'publicationDate', 'actions'];
  dataSource: MatTableDataSource<Book>;
  subscriptions: Subscription[] = [];

  constructor(private bookService: BookService,
              private router: Router) { }

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

}