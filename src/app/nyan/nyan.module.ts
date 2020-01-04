import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NyanRoutingModule } from './nyan-routing.module';
import { NyanComponent } from './nyan.component';

import { YearCalendarModule } from '@iomechs/angular-year-calendar';


@NgModule({
  declarations: [NyanComponent],
  imports: [
    CommonModule,
    NyanRoutingModule,
    YearCalendarModule
  ]
})
export class NyanModule { }
