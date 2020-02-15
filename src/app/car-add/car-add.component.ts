import {Component} from '@angular/core';

//Providers
import {CarsService} from '../../services/cars.service';

@Component({
  selector: "car-add",
  templateUrl: "./car-add.component.html",
  styleUrls: ["./car-add.component.css"]
})
export class CarAdd {
  public carName = "";

  constructor(private serviceCars: CarsService) {}

  public addCar() {
    this.serviceCars.addCar(this.carName);
    this.carName = "";
  }
}
