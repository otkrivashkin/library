import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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

import { AppComponent } from './app.component';
import {AuthorModule} from "./author/author.module";
import {RouterModule, Routes} from "@angular/router";
import {BookModule} from "./book/book.module";
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import {CdkTableModule} from "@angular/cdk/table";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";

const routes: Routes = [
  {path: '', redirectTo: '/authors', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
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
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
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
    AuthorModule,
    BookModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
