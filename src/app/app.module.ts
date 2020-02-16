import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';

//components
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule // Для реактивного подхода валидации форм используется данная библиотека.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
