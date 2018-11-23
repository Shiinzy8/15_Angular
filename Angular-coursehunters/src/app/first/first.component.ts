// импортируем Component из node_modules @angular/core
import { Component } from '@angular/core';

// @ это декоратор
@Component({
  selector: 'app-first', // селектор для подключения данного компонента
  templateUrl: './first.component.html'
})

export class FirstComponent {}
