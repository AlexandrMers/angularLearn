import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public cars: {name: string; isSold: boolean}[] = [
    {
      name: 'Ford',
      isSold: false
    },
    {
      name: 'Mazda',
      isSold: false
    },
    {
      name: 'Mercedes',
      isSold: false
    },
  ];

  public addCarToList(carName: string) {
    this.cars.push({
      name: carName,
      isSold: false
    });
  }

}
