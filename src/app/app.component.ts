import {Component} from '@angular/core';
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

  constructor(private carsService: CarsService) {}


  public getData() {
    this.carsService.getCars().subscribe((cars: CarsInterface[]) => {
      this.cars = cars;
    });
  }

  public addCar() {
    this.carsService.addCar(this.carName).subscribe(car => this.cars.push(car));
    this.carName = "";
  }
}
