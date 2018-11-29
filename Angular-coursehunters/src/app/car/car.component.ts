import {Component, Input} from '@angular/core';
import {ConsoleService} from '../console.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
  providers: [ConsoleService]
})
export class CarComponent {

  @Input() car;

  // сервисы лучше всего делать inject
  constructor(private consoleService: ConsoleService) {
  }

  getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true
    };
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy';
    this.consoleService.log(`${this.car.name} status = ${type}`);
  }
}