import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

interface AnswerInterface {
  type: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {

  public answers: AnswerInterface[] = [
    {
      type: 'yes',
      text: 'да'
    },
    {
      type: 'no',
      text: 'нет'
    }
  ];

  public submitForm(form: NgForm) {
    console.log('submitted form ', form);
  }

}
