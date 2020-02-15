import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: "car-add",
  templateUrl: "./car-add.component.html",
  styleUrls: ["./car-add.component.css"]
})
export class CarAdd {
  @Output() onAddCar = new EventEmitter();
  public carName = "";


  public addCar() {
    this.onAddCar.emit(this.carName);
    this.carName = "";
  }
}
