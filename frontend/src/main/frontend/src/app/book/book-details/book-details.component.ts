import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Book} from "../model/book";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor(private bookService: BookService,
              private route: ActivatedRoute,
              private router: Router) { }

  book: Book;

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.bookService.findBookById(id).subscribe(data => {
      console.log('Book details = ', data);
      this.book = data;
    });
  }

  onAuthorSelect(id: number): void {
    this.router.navigateByUrl(`authors/${id}`);
  }

}
