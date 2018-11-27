import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  carName = '';
  carYear = 2017;

  // cars: [{name: string, year: number}] - определение переменной cars с типом массив объектов
  cars: {name: string, year: number}[] = [
    {name: 'Mazda', year: 2011},
    {name: 'Ford', year: 2012},
    {name: 'BMW', year: 2013},
  ];

  constructor() {}

  addCar() {
    this.cars.push({
      name: this.carName,
      year: this.carYear
    });

    // этих два поля нужны что б в инпут после добавления сбрасывать на занчения по умолчанию
    this.carName = '';
    this.carYear = 2017;
  }
}
