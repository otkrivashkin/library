import {Component, OnInit} from '@angular/core';
import {Author} from "../model/author";
import {AuthorService} from "../author.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
  styleUrls: ['./author-details.component.css']
})
export class AuthorDetailsComponent implements OnInit {

  constructor(private authorService: AuthorService,
              private route: ActivatedRoute,
              private router: Router) { }

  author: Author;

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.authorService.findAuthorById(id)
      .subscribe(data => this.author = data)
  }

  onBookSelect(id: number): void {
    this.router.navigateByUrl(`books/${id}`);
  }

}
