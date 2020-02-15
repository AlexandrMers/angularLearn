import {Component, OnInit} from '@angular/core';

import {CarsInterface, CarsService} from '../services/cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public cars: CarsInterface[];

  constructor(
    private serviceCars: CarsService
  ) {}


  ngOnInit(): void {
    this.cars = this.serviceCars.cars;

    console.log(this.cars);
  }

}
