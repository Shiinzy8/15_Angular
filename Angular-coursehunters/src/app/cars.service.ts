import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Cars} from './cars.type';
import {Title} from './title.type';

import {map, delay, catchError, } from 'rxjs/operators';


@Injectable()
export class CarsService {
  urlCars = 'http://localhost:3000/cars';
  urlTitle = 'http://localhost:3000/title';
  constructor(private http: HttpClient) {}

  getAppTitle() {
    return this.http.get(this.urlTitle).pipe(
      delay(3000),
      map((response: Title) => response.value)
    );
  }

  loadCars(): Observable<Cars[]> {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf8',
      }),
    };

    // const getObject = this.http.get<Cars[]>('http://localhost:30001/cars', requestOptions); // для теста ошибок
    const getObject = this.http.get<Cars[]>(this.urlCars, requestOptions);
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
    return this.http.post(this.urlCars, data, requestOptions);
  }

  changeColor(car: any, color: string) {
    car.color = color;
    return this.http.put(this.urlCars + `/${car.id}`, car);
  }

  deleteCar(car: any) {
    return this.http.delete(this.urlCars + `/${car.id}`);
  }
}
