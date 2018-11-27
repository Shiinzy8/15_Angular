import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild} from '@angular/core';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {
  // это специальный тип для эмулаяции события, в <> данные которые он будет емитеть наружу
  // Output это грубо говоря передача данных наружу

  // tslint:disable-next-line:no-output-on-prefix no-output-rename
  @Output('onAddCar') carEmmiter = new EventEmitter<{name: string, year: number}>();
  @ViewChild('carYearInput') carYearInput: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addCar(carNameEl: HTMLInputElement) {
    this.carEmmiter.emit({
      name: carNameEl.value,
      year: +this.carYearInput.nativeElement.value
    });

    // этих два поля нужны что б в инпут после добавления сбрасывать на занчения по умолчанию
    carNameEl.value = '';
    this.carYearInput.nativeElement.value = 2017;
  }
}
