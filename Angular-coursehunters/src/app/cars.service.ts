import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

import {Cars} from './cars.type';
import {map, catchError} from 'rxjs/operators';

@Injectable()
export class CarsService {
  url = 'http://localhost:3000/cars';
  constructor(private http: HttpClient) {}

  loadCars(): Observable<Cars[]> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf8',
      }),
    };

    const getObject = this.http.get<Cars[]>('http://localhost:30001/cars', requestOptions);
    console.log(typeof getObject);

    return getObject.pipe(
        map(
          cars => {
            // console.log('json cars array');
            // console.log(JSON.stringify(cars));
            return cars;
          }
        ),
        catchError(err => {
          // console.log('error');
          // console.log(err);
          return throwError('server is not available, try again later');
        })
      )
      ; // возвращает обсербавал объект или стреам
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message);
  }

  addCar(carName: string) {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf8',
      }),
    };

    const data = {
      name: carName,
      color: 'blue'
    };
    return this.http.post(this.url, data, requestOptions);
  }

  changeColor(car: any, color: string) {
    car.color = color;
    return this.http.put(this.url + `/${car.id}`, car);
  }

  deleteCar(car: any) {
    return this.http.delete(this.url + `/${car.id}`);
  }
}
