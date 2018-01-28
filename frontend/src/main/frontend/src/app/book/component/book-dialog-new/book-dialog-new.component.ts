import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDatepickerInputEvent, MatDialogRef} from "@angular/material";
import {Author} from "../../../author/model/author";
import {AuthorService} from "../../../author/service/author.service";

@Component({
  selector: 'app-book-dialog-new',
  templateUrl: './book-dialog-new.component.html',
  styleUrls: ['./book-dialog-new.component.css']
})
export class BookDialogNewComponent implements OnInit {

  newBookForm: FormGroup;
  authors: Author[];

  constructor(public dialogRef: MatDialogRef<BookDialogNewComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private fb: FormBuilder,
              private authorService: AuthorService) { }

  ngOnInit() {
    this.initAuthors();
    this.initForm();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  initForm(): void {
    this.newBookForm = this.fb.group({
      title: ['', [Validators.required]],
      genre: ['', [Validators.required]],
      author: ['', [Validators.required]],
      publicationDate: ['']
    })
  }

  initAuthors() {
    this.authorService.getAuthors().subscribe(data => {
      console.log(data);
      this.authors = data;
    },
      error => console.log(error))
  }

  addDate(event: MatDatepickerInputEvent<Date>) {
    this.newBookForm.get('publicationDate').setValue(event.value);
    console.log(`Dialog current date is ${this.newBookForm.get('publicationDate').value}`);
  }

  createBook(): void {
    const value = this.newBookForm.value;
    this.dialogRef.close(value);
  }



}
