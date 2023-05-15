import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { MoviesComponent } from './movies/movies.component';
import { ComparexyComponent } from './comparexy/comparexy.component';

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    MoviesComponent,
    ComparexyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
