import {Component, Input} from '@angular/core';
import {ConsoleService} from "../../services/console.service";

@Component({
  selector: "app-car",
  templateUrl: "./app-car.component.html",
  styleUrls: ["./app-car.component.css"]
})
export class AppCar {
  @Input() car: {name: string; isSold: boolean};


  constructor(
    private consoleService: ConsoleService // Такое внедрение полей через конструктор называется "инъекцией в класс" . Сначала мы указываем наше название переменной, а точнее поля, куда запишем наш сервис, а в качестве "типа" мы передаем наш импортированный сервис. Так мы заинжектили наш сервис ConsoleService. Также, чтобы сервис работал правильно, мы должны зарегистрировать его в модуле или конкретном компоненте - в поле - providers.
  ) {

  }

  public getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true,
      'mb-1': true
    }
  }

  onAction(type: string) {
    this.car.isSold = type === 'buy';
    this.consoleService.log(`${this.car.name} status = ${type}`); // Таким образом мы воспользовались нашим сервисом.
  }
}
