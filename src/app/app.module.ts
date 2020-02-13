import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

//components
import { AppComponent } from './app.component';

// pipes
import {CarFilterPipe} from './pipes/carFilter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    CarFilterPipe
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
