import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss']
})
export class CarAddComponent {

  // tslint:disable-next-line:no-output-on-prefix
  @Output() onCarAdd = new EventEmitter<String>();
  carName = '';

  addCar() {
    this.onCarAdd.emit(this.carName);
    this.carName = '';
  }
}
