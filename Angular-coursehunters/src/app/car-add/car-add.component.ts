import {Component, EventEmitter, Output} from '@angular/core';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss']
})
export class CarAddComponent {

  // tslint:disable-next-line:no-output-on-prefix
  // @Output() onCarAdd = new EventEmitter<String>();
  carName = '';

  constructor(private service: CarsService) {}

  addCar() {
    this.service.addCar(this.carName);
    // this.onCarAdd.emit(this.carName);
    this.carName = '';
  }
}
