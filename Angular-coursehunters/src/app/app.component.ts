import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  template: `
  <div class="col-md-8 offset-md-2">
    <h1>{{ asyncTitle | async }}</h1>
    <input type="text" class="form-control" [(ngModel)]="searchCar">
    <button class="btn btn-primary" (click)="addCar()">
      Add
    </button>
    <hr>
    <ul class="list-group">
      <li *ngFor="let car of cars | carFilter:searchCar:'name'; let i = index" class="list-group-item">
        {{ i + 1 }} {{ car.name }} <i>{{ car.descr }}</i>
      </li>
    </ul>
    <!--<h2>{{ name }}</h2>-->
    <!--<h2>{{ name | appPow:3:'=' }}</h2>-->
    <!--<h2>{{ name | appPow:3 }}</h2>-->
    <!--<h2>{{ name | appPow:1 }}</h2>-->
    <!--<h2>{{ name | appPow:0 }}</h2>-->
    <!--<h2>{{ name | appPow:4 }}</h2>-->
    <!--<h2>{{ 6 | appPow:3 }}</h2>-->

    <!-- эти pipe применим только к строковым типам данных-->
    <!--<h2>{{ name | lowercase }}</h2>-->
    <!--<h2>{{ name | uppercase }}</h2>-->
    <!--<h2>{{ name | slice:0:3 }}</h2>-->
    <!--<h2>{{ name | slice:0:3 | lowercase }}</h2>-->
    <!--<h2>{{ name | slice:0:3 | uppercase }}</h2>-->
    <!--<hr>-->
    <!-- эти pipe применим только к числовым типам данных-->
    <!--<h2>{{ pi }}</h2>-->
    <!--<h2>{{ pi | number }}</h2>-->
    <!--<h2>{{ pi | number:'1.3-4' }}</h2>-->
    <!--<h2>{{ pi | number:'2.1-1' }}</h2>-->
    <!--<hr>-->
    <!-- эти pipe для вывода валюты-->
    <!--<h2>{{ money }}</h2>-->
    <!--<h2>{{ money | currency }}</h2>-->
    <!--<h2>{{ money | currency:'EUR' }}</h2>-->
    <!--<h2>{{ money | currency:'USD':'code' }}</h2>-->
    <!--<hr>-->
    <!-- эти pipe для вывода дат-->
    <!--<h2>{{ date }}</h2>-->
    <!--<h2>{{ date | date }}</h2>-->
    <!--<h2>{{ date | date:'fullDate' }}</h2>-->
    <!--<h2>{{ date | date:'shortDate' }}</h2>-->
    <!--<h2>{{ date | date:'shortTime' }}</h2>-->
    <!--<hr>-->
    <!--<h2>{{ amount }}</h2>-->
    <!--<h2>{{ amount | percent }}</h2>-->
    <!--<hr>-->
    <!--<h2>{{ object | json }}</h2>-->
    <!--<hr>-->
    <!--<h2><pre>{{ object | json }}</pre></h2>-->
  </div>
  `
})
export class AppComponent {
  searchCar = '';
  cars = [
    {name: 'Ford', descr: 'WPM 1'},
    {name: 'Mazda', descr: 'WPM 2'},
    {name: 'BMW', descr: 'WPM 3'},
    {name: 'Audi', descr: 'WPM 4'},
    {name: 'Bentley', descr: 'WPM 5'},
    {name: 'Ferrari', descr: 'WPM 6'},
  ];

  asyncTitle = of('Async title 3 seconds').pipe(delay(3000));

  name = '2';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'bar',
    baz: 'qux',
    nested: {
      xyz: 3,
      numbers: [1, 2, 3],
    }
  };

  addCar() {
    this.cars.push({name: 'New car', descr: 'Descr of the new car'});
  }
}

