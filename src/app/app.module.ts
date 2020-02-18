import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

//components
import {AppComponent} from './app.component';

//services
import {CarsService} from '../services/cars.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    CarsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
