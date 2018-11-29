import {ConsoleService} from './console.service';
import {Injectable} from '@angular/core';

@Injectable() // нужен для того что бы инжектить другие сервисы
export class CarsService {
  constructor(private consoleService: ConsoleService) {}

  cars = [
    {
      name: 'Ford',
      isSold: false
    },
    {
      name: 'Mazda',
      isSold: true
    },
    {
      name: 'Mercedes',
      isSold: false
    }
  ];

  addCar(name: string) {
    this.cars.push({name, isSold: false});
    this.consoleService.log(`car ${name} was added`);
  }
}
