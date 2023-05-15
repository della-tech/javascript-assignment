import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  cars:any[];
  hide:boolean;


  constructor()
  {
    this.cars=
    [
      {
        make:"BMW",
        model:"3Series",
        year:2019
      },
      {
        make:"BMW",
        model:"4Series",
        year:2020
      }
    ]

    this.hide=true;
  }
  
  toggle():any{
    this.hide=!this.hide;
  }
}
