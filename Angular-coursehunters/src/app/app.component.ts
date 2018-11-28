import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="col-md-8 offset-md-2">
    <h2>{{ name }}</h2>
    <!-- эти pipe применим только к строковым типам данных-->
    <h2>{{ name | lowercase }}</h2>
    <h2>{{ name | uppercase }}</h2>
    <h2>{{ name | slice:0:3 }}</h2>
    <h2>{{ name | slice:0:3 | lowercase }}</h2>
    <h2>{{ name | slice:0:3 | uppercase }}</h2>
    <hr>
    <!-- эти pipe применим только к числовым типам данных-->
    <h2>{{ pi }}</h2>
    <h2>{{ pi | number }}</h2>
    <h2>{{ pi | number:'1.3-4' }}</h2>
    <h2>{{ pi | number:'2.1-1' }}</h2>
    <hr>
    <!-- эти pipe для вывода валюты-->
    <h2>{{ money }}</h2>
    <h2>{{ money | currency }}</h2>
    <h2>{{ money | currency:'EUR' }}</h2>
    <h2>{{ money | currency:'USD':'code' }}</h2>
    <hr>
    <!-- эти pipe для вывода дат-->
    <h2>{{ date }}</h2>
    <h2>{{ date | date }}</h2>
    <h2>{{ date | date:'fullDate' }}</h2>
    <h2>{{ date | date:'shortDate' }}</h2>
    <h2>{{ date | date:'shortTime' }}</h2>
    <hr>
    <h2>{{ amount }}</h2>
    <h2>{{ amount | percent }}</h2>
    <hr>
    <h2>{{ object | json }}</h2>
    <hr>
    <h2><pre>{{ object | json }}</pre></h2>
  </div>
  `
})
export class AppComponent {
  name = 'WebForMyself';
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
}

