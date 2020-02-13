import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <input type="text" class="form-control mb-4 mt-4" [(ngModel)]="searchCar">
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let car of cars | carFilter:searchCar; let idx = index"><b>{{idx + 1}} </b>{{car.name}}</li>
    </ul>
    </div>
  `
})
export class AppComponent {
  public searchCar: string = "";

  cars = [
    {name: 'Ford'},
    {name: 'Mazda'},
    {name: 'Bently'},
    {name: 'Audi'},
    {name: 'Mercedes'},
    {name: 'BMW'}
  ];
}
