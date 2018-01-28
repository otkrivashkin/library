import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorListComponent} from "./component/author-list/author-list.component";
import {RouterModule, Routes} from "@angular/router";
import {AuthorService} from "./service/author.service";
import {HttpClientModule} from "@angular/common/http";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CdkTableModule} from "@angular/cdk/table";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AuthorDetailsComponent } from './component/author-details/author-details.component';
import { AuthorDialogNewComponent } from './component/author-dialog-new/author-dialog-new.component';
import { AuthorEditComponent } from './component/author-edit/author-edit.component';

const routes: Routes = [
  {path: 'authors', component: AuthorListComponent},
  {path: 'authors/:id', component: AuthorDetailsComponent},
  {path: 'authors/edit/:id', component: AuthorEditComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    HttpClientModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatExpansionModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    BrowserAnimationsModule,
    CdkTableModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    BrowserModule,
    MatDialogModule,
    MatListModule,
    MatProgressBarModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatCheckboxModule,
    MatSortModule,
    MatPaginatorModule,
    MatFormFieldModule,
  ],
  declarations: [
    AuthorListComponent,
    AuthorDetailsComponent,
    AuthorDialogNewComponent,
    AuthorEditComponent,
  ],
  providers: [
    AuthorService
  ],
  entryComponents: [AuthorDialogNewComponent]
})
export class AuthorModule { }
