import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appPow'
})
export class PowPipe implements PipeTransform {
  transform(value: any, powNumber: number = 1, symbol: string): any {
    value = Math.pow(value, powNumber);
    return symbol + value;
  }
}
