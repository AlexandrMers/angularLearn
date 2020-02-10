import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public headerText: string = "Создание своей директивы";
  public current: number = null;

  public items = [1, 2, 3, 4, 5];

  public onClick(val) {
    this.current = val;
  }
}
