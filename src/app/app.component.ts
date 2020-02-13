import {Component} from '@angular/core';
import 'rxjs';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h1>{{asyncTitle | async}}</h1>
      <input type="text" class="form-control mb-4 mt-4" [(ngModel)]="searchCar">
    <ul class="list-group">
      <li class="list-group-item" *ngFor="let car of cars | carFilter:searchCar; let idx = index"><b>{{idx + 1}} </b>{{car.name}}</li>
    </ul>
    </div>
  `
})
export class AppComponent {
  public searchCar: string = "";

  public asyncTitle = Observable.of('Async title 3seconds').delay(3000);

  cars = [
    {name: 'Ford'},
    {name: 'Mazda'},
    {name: 'Bently'},
    {name: 'Audi'},
    {name: 'Mercedes'},
    {name: 'BMW'}
  ];
}
