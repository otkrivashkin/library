import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorListComponent} from "./author-list/author-list.component";
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {AuthorService} from "./author.service";

const routes: Routes = [
  {path: 'authors', component: AuthorListComponent}
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [
    AuthorListComponent,
  ],
  providers: [
    AuthorService
  ],
})
export class AuthorModule { }
