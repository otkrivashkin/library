import {Component, OnInit} from '@angular/core';
import {Author} from "../../model/author";
import {AuthorService} from "../../service/author.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Book} from "../../../book/model/book";

@Component({
  selector: 'app-author-edit',
  templateUrl: './author-edit.component.html',
  styleUrls: ['./author-edit.component.css']
})
export class AuthorEditComponent implements OnInit {

  editAuthorForm: FormGroup;
  author: Author;
  books: Book[] =[];
  bookControl: FormArray;

  constructor(private authorService: AuthorService,
              private route: ActivatedRoute,
              private fb: FormBuilder,
              private router: Router) {
  }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.authorService.findAuthorById(id)
      .subscribe(data => {
        console.log(data);
        this.author = data;
        this.books = data.books;
      });
    this.initForm();
  }

  initForm() {
    this.bookControl = this.fb.array([]);
    this.editAuthorForm = this.fb.group({
      id: this.route.snapshot.params['id'],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      books: this.bookControl
    })
  }

  editAuthor() {
    const author = this.editAuthorForm.value;
    console.log(author);
    this.authorService.editAuthor(author)
      .subscribe(result => {
          console.log(result);
          this.router.navigateByUrl('authors');
        },
        error => console.log(error));
  }

  onCancel() {
    this.router.navigateByUrl('authors');
  }
}
