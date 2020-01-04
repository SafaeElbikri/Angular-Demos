import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nyan',
  templateUrl: './nyan.component.html',
  styleUrls: ['./nyan.component.css']
})
export class NyanComponent implements OnInit {
  isLoadingData: boolean;
  currentDate: any;
  myCalendarConfig: any;
  constructor() { }

  ngOnInit() {
    this.isLoadingData = true;
    this.currentDate = new Date();
    this.myCalendarConfig = {heatmapColor: 'hsl(0, 0%, 100%)', data: [{count: 1, date: new Date()}]};
  }

  viewYearChangedHandler($event) {
    console.log($event);
  }

  eventDayClickHandler($event) {
    console.log($event);
  }

}
