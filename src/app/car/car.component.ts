import {Component, EventEmitter, Input, Output} from '@angular/core';

import {CarInterface} from "../cars/cars.component";

@Component({
  selector: '[app-car]',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})


export class CarComponent {
  @Input() car: CarInterface;

 @Output() onDelete = new EventEmitter<any>();

  public btnClick(): void {
    this.onDelete.emit();
  }
}
