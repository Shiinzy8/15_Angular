import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';

interface Cars {
  name: string;
  color: string;
  number: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  cars: Cars[]  = [];

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
}
