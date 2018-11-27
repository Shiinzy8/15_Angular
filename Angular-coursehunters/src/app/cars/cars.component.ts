import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  carName = '';
  addCarStatus = false;
  cars = [
    'Ford',
    'Mazda',
    'BMW',
    'Bentley',
    'Ferrari'
  ];
  dates = [
    new Date(2017, 1, 1).toDateString(),
    new Date(2017, 2, 2).toDateString(),
    new Date(2017, 3, 3).toDateString(),
    new Date(2017, 4, 4).toDateString(),
    new Date(2017, 5, 5).toDateString()
  ];


  constructor() {
    // setTimeout(() => {
    //   this.canAddCar = true;
    // }, 4000);
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  // setBigCarText(car: string) {
  //   return car.length > 4;
  // }
}
