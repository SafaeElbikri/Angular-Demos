import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view-todos',
  templateUrl: './view-todos.component.html',
  styleUrls: ['./view-todos.component.css']
})
export class ViewTodosComponent implements OnInit {
  list: Observable<any[]>;

  constructor(http: HttpClient) {
    const path = 'https://jsonplaceholder.typicode.com/posts';
    this.list = http.get<any[]>(path).pipe(
      map(data => {
        console.log(data);
        return data;
      })
    );
  }

  ngOnInit() {}
}
