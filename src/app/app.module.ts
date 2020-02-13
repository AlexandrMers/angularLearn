import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

//components
import { AppComponent } from './app.component';
import {PowPipe} from './pipes/pow.pipe';



@NgModule({
  declarations: [
    PowPipe,
    AppComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
