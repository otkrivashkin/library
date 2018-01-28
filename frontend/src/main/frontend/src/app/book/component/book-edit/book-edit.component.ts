import { Component, OnInit } from '@angular/core';
import {Book} from "../../model/book";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../service/book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDatepickerInputEvent} from "@angular/material";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  editBookForm: FormGroup;
  book: Book;
  date: any;

  constructor(private bookService: BookService,
              private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.bookService.findBookById(id)
      .subscribe(data => {
        console.log(data);
        this.book = data;
        this.date = new FormControl(new Date(this.book.publicationDate));
      },
        error => console.log(error));
    this.initForm();
  }

  initForm() {
    this.editBookForm = this.fb.group({
      id: this.route.snapshot.params['id'],
      title: ['', Validators.required],
      genre: ['', Validators.required],
      publicationDate: [''],
    })

  }

  addDate(event: MatDatepickerInputEvent<Date>) {
    this.editBookForm.get('publicationDate').setValue(event.value);
  }

  editBook() {
    const book = this.editBookForm.value;
    console.log(book);
    this.bookService.editBook(book)
      .subscribe(result => {
        console.log(result);
        this.router.navigateByUrl('books');
      },
        error => console.log(error))
  }

  onCancel() {
    this.router.navigateByUrl('books');
  }

}
