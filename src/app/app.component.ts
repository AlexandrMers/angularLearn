import {ChangeDetectorRef, Component} from '@angular/core';

import {CarsService} from '../services/cars.service';

export interface CarsInterface {
  name: string;
  id: number;
  color: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cars = [];
  public carName: string = "";
  public colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'gray',
    'black'
  ];

  constructor(
    private carsService: CarsService,
    private cdr: ChangeDetectorRef,
  ) {}


  public getData() {
    this.carsService.getCars().subscribe((cars: CarsInterface[]) => {
      this.cars = cars;
    });
  }

  public addCar() {
    this.carsService.addCar(this.carName).subscribe(car => this.cars.push(car));
    this.carName = "";
  }

  public toChangeRandomColor(car: CarsInterface) {
    const randomNumber = Math.round(Math.random() * this.colors.length - 1);
    const color = this.colors[randomNumber];

    this.carsService.changeColor(car, color).subscribe(car => {
      this.cars.find(elem => elem.id === car.id).color = car.color;
    });
  }

  public deleteCar(car: CarsInterface) {
    this.carsService.deleteCar(car.id).subscribe(() => {
      this.cars = this.cars.filter(elem => elem.id !== car.id);
    });
  };
}
