import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {
  // canAddCar = false;
  addCarStatus = '';
  inputText = '';

  constructor() {
    // setTimeout(() => {
    //   this.canAddCar = true;
    // }, 4000);
  }

  addCar() {
    this.addCarStatus = 'Car is added';
  }

  onKeyUp(event) {
  // onKeyUp(value: string) {
    console.log(event);
    // if (event.code === 'Enter') {
    this.inputText = event.target.value;
    // }
    // this.inputText = (<HTMLInputElement>event.target).value;
    // if (event.keyCode === 37 ) {
    // this.inputText = value;
  }
}
