import { Component } from '@angular/core';

@Component({
  selector: 'app-comparexy',
  templateUrl: './comparexy.component.html',
  styleUrls: ['./comparexy.component.css']
})
export class ComparexyComponent {
  x:number;
  y:number;

  constructor(){
    this.x=100;
    this.y=200;
  }

}
