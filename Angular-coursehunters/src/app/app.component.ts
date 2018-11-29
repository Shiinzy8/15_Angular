import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [CarsService]
})
export class AppComponent implements OnInit {
  cars = [];
  constructor(private service: CarsService) {}

  ngOnInit(): void {
    this.cars = this.service.cars;
  }

  // addCarToList(carName: string) {
  //   this.service.addCar(carName);
  // }
}
