import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <h2>{{num}}</h2>
      <h2>{{num | appPow:10 }}</h2>
    </div>
  `
})
export class AppComponent {
  public num = 2;
}
