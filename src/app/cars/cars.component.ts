import { Component } from '@angular/core';



export interface CarInterface {
  carName: string;
  carYear: number;
}

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent  {

  private cars: CarInterface[] = [];


  

  get Cars() {
    return this.cars;
  }

  public onAddCar(value: CarInterface) {
    this.cars.push(value);
  }

  public deleteItem(idx) {
    this.cars.splice(idx, 1);
  }

}

