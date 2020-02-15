import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

//components
import { AppComponent } from './app.component';
import {CarAdd} from './car-add/car-add.component';
import {AppCar} from './car/app-car.component';

//providers
import {CarsService} from '../services/cars.service';
import {ConsoleService} from '../services/console.service';


@NgModule({
  declarations: [
    AppComponent,
    CarAdd,
    AppCar
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [
    CarsService,
    ConsoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
