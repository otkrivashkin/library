import {Component, OnInit} from '@angular/core';
import {Http} from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: Http) {
    this.http.get('http://localhost:8080/api').subscribe(data => console.log(data))
  }

  ngOnInit(): void {

  }
  title:any = 'app works!';


}
