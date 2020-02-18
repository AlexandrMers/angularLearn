import {Component} from '@angular/core';
import {CarsService} from '../services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public cars = [];

  constructor(private carsService: CarsService) {}


  public getData() {
    this.carsService.getCars().subscribe(data => {
      console.log(JSON.parse(data["_body"]));
      this.cars = JSON.parse(data["_body"]);
    });
  }
}
