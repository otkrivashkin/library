import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-author-dialog-new',
  templateUrl: './author-dialog-new.component.html',
  styleUrls: ['./author-dialog-new.component.css']
})
export class AuthorDialogNewComponent implements OnInit {

  newAuthorForm: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<AuthorDialogNewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.newAuthorForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]]
    });
  }

  createAuthor(): void {
    const value = this.newAuthorForm.value;
    this.dialogRef.close(value);
  }

}
