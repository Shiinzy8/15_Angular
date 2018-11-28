import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter',
  pure: false, // это фунция очень не оптимальная, она запускает пайп в два раза чаще, влияет на производительность
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, searchStr: string, fieldName: string): any {
    console.log('Filter pipe started');
    if (carList.length === 0 || searchStr === '') {
      return carList;
    }
    // return carList.filter((car) => car.name === searchStr);
    return carList.filter(car => car[fieldName].toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  }

}
