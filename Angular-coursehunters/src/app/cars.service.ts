import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CarsService {
  url = 'http://localhost:3000/cars';
  constructor(private http: HttpClient) {}

  getCars() {
    return this.http.get(this.url); // возвращает обсербавал объект или стреам
  }

  addCar(carName: string) {
    const data = {
      name: carName,
      color: 'blue'
    };
    return this.http.post(this.url, data);
  }

  changeColor(car: any, color: string) {
    car.color = color;
    return this.http.put(this.url + `/${car.id}`, car);
  }

  deleteCar(car: any) {
    return this.http.delete(this.url + `/${car.id}`);
  }
}
