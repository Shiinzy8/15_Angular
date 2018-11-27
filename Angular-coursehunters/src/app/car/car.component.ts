import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked, AfterViewInit,
  Component,
  ContentChild, DoCheck,
  ElementRef,
  Input,
  OnChanges, OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  // @Input значит что данное поле входящее а внутреннее этого компонента
  // так же можно в () передать название за которым надо следить

  // tslint:disable-next-line:no-input-rename
  @Input('carItem') car: {name: string, year: number};

  @Input() name: string;
  // мы таким способом получаем локальную референции потому что контент передаем через ng-content
  @ContentChild('carName') carName: ElementRef;

  // tslint:disable-next-line:use-life-cycle-interface
  // ngAfterViewInit() {
    // console.log(this.carName);
  // }

  constructor() {
    console.log('constructor');
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }
}
