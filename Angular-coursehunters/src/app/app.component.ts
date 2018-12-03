import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';

interface Cars {
  name: string;
  color: string;
  id: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  cars: Cars[]  = [];
  carName = '';
  colors = ['red', 'blue', 'green', 'pink', 'yellow', 'grey'];

  constructor(private carsService: CarsService) {}

  ngOnInit() {}

  loadCars() {
    // subscribe of HTTPClient возвращает json data
    this.carsService
      .getCars()
      .subscribe(
        (cars: Cars[]) => {
          // console.log(data);
          this.cars = cars;
        });
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
