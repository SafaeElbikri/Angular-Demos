import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewTodosComponent } from './view-todos/view-todos.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SingleTodoComponent } from './single-todo/single-todo.component';


// import { YearCalendarModule } from '@iomechs/angular-year-calendar';

@NgModule({
  declarations: [
    AppComponent,
    ViewTodosComponent,
    TodosListComponent,
    SingleTodoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // YearCalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
