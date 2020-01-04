import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SingleTodoComponent implements OnInit {
  @Input() singleTodo;
  constructor() { }

  ngOnInit() {
  }

}
