import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
  // @Input значит что данное поле входящее а внутреннее этого компонента
  // так же можно в () передать название за которым надо следить

  // tslint:disable-next-line:no-input-rename
  @Input('carItem') car: {name: string, year: number};
  private carItem = false;
}
