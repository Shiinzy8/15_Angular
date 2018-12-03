import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class CarsService {
  url = 'http://localhost:3000/cars';
  constructor(private http: HttpClient) {}

  getCars() {
    const requestOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf8',
      }),
    };

    return this.http.get(this.url, requestOptions); // возвращает обсербавал объект или стреам
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
