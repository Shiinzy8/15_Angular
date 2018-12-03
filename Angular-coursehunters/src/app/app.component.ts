import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
  cars = [];

  constructor(private carsService: CarsService) {}

  ngOnInit() {}

  loadCars() {
    // subscribe принимает функцию которая сработает когда вернутся данные getCars
    this.carsService
      .getCars()
      .subscribe(
        (response) => {
          console.log(response);
        });
  }
}
