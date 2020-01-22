import { Component } from '@angular/core';
import { HttpTestService } from './http-test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private testService: HttpTestService) {}

  title = 'shiny-ivy-app';

  fetch() {
    this.testService.fetch().subscribe(data => console.log(data));
  }
}
