import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  // templateUrl: './car.component.html',
  // либо templateUrl or template
  template: `
  <h2>Single car</h2>
  `,
  // styleUrls массив где мы перечисляем пути до файлов css
  // styleUrls: ['./car.component.scss']
  // либо styleUrl or styles
  styles: [`
    h2 {
      color: fuchsia;
    }
  `]
})
export class CarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
