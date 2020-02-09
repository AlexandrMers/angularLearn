import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//components
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';

//Directives
import {BackgoundDirective} from './directives/backgound.directive';

@NgModule({
  declarations: [
    AppComponent,
    BackgoundDirective
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
