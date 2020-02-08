import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';
import {FormsModule} from "@angular/forms";
import {FormComponent} from "./form-component/form-component";

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    CarComponent,
    FormComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
