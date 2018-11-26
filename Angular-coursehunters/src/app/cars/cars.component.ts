import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  carName = '';
  addCarStatus = false;


  constructor() {
    // setTimeout(() => {
    //   this.canAddCar = true;
    // }, 4000);
  }

  addCar() {
    this.addCarStatus = true;
  }
}
