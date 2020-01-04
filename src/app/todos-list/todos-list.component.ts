import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodosListComponent implements OnInit {
  @Input() list: any[];
  constructor() { }

  ngOnInit() {
  }

}
