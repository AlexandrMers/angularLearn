import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent  {
  inputText = "";

  changeText = (value) => {
    this.inputText = value;
  };

  clickBtn = (value) => {
    console.log(value);
  };

}
