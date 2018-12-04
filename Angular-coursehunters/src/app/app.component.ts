import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';
import {Cars} from './cars.type';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  // cars: Observable<Cars[]>;
  cars: any;
  carName = '';
  appTitle;
  colors = ['red', 'blue', 'green', 'pink', 'yellow', 'grey'];
  error: any;

  constructor(private carsService: CarsService) {}

  ngOnInit() {
    this.appTitle = this.carsService.getAppTitle();
  }

  loadCars() {
    this.cars = this.carsService.loadCars();
  }

  loadCarsOld() {
    // subscribe of HTTPClient возвращает json data
    this.carsService
      .loadCars()
      .subscribe(
        cars => this.cars = cars, // первый callback function ответ от сервера
        error => { this.error = error.message; console.log(error); alert(error); console.clear(); }
        // второй callback для обработки ошибки
        // третий callback выполнится после выполнения всего
        );
  }

  addCar() {
    this.carsService
      .addCar(this.carName)
      .subscribe(
        (car: Cars) => {
          // console.log(car);
        this.cars.push(car);
      });
    this.carName = '';
  }

  getRandomColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car: Cars) {
    this.carsService
      .changeColor(car, this.getRandomColor())
      .subscribe(
      (data) => {
        console.log(data);
      });
  }

  deleteCar(car: Cars) {
    this.carsService
      .deleteCar(car)
      .subscribe(
        (data) => {
          this.cars = this.cars.filter(c => c.id !== car.id);
          console.log(this.cars);
        });
  }
}
