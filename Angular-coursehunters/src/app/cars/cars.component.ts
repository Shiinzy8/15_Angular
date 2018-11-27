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
    'BMW'
  ];
  items = [
    {id: 1, name: 'item 1'},
    {id: 4, name: 'item 4'},
    {id: 8, name: 'item 8'}
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
}
