import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CarsComponent {

  // cars: [{name: string, year: number}] - определение переменной cars с типом массив объектов
  cars: {name: string, year: number}[] = [
    {name: 'Mazda', year: 2011},
    {name: 'Ford', year: 2012},
    {name: 'BMW', year: 2013},
  ];

  constructor() {}

  updateCarsList(car: {name: string, year: number}) {
    this.cars.push(car);
  }
}
