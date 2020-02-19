import {Component} from '@angular/core';
import {CarsService} from '../services/cars.service';


interface CarsInterface {
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

  constructor(private carsService: CarsService) {}


  public getData() {
    this.carsService.getCars().subscribe((cars: CarsInterface[]) => {
      this.cars = cars;
    });
  }
}
