import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';

import {CarsInterface} from '../app/app.component';

@Injectable()
export class CarsService {
  constructor(
    private http: Http
  ) {
  }

  getCars() {
    return this.http.get('http://localhost:3000/cars')
      .map((response: Response) => response.json());
  }

  addCar(name: string) {
    const data: CarsInterface = {
      name,
      color: 'red',
      id: Math.random()
    };
    return this.http.post('http://localhost:3000/cars', data)
      .map((response: Response) => response.json());
  }

  changeColor(car: CarsInterface, color: string) {
    const data = {
      ...car,
      color
    };
    return this.http.put(`http://localhost:3000/cars/${car.id}`, data)
      .map((response:Response) => response.json());
  }

  deleteCar(id: number) {
    return this.http.delete(`http://localhost:3000/cars/${id}`)
    .map((response: Response) => response.json());
  }
}
