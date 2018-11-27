import {Component, ContentChild, ElementRef, Input, ViewChild} from '@angular/core';

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
  // мы таким способом получаем локальную референции потому что контент передаем через ng-content
  @ContentChild('carName') carName: ElementRef;

  // tslint:disable-next-line:use-life-cycle-interface
  ngAfterViewInit() {
    console.log(this.carName);
  }
}
