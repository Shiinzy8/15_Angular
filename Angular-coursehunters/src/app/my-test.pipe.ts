import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myTest'
})
export class MyTestPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
