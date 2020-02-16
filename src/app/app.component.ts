import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

interface AnswerInterface {
  type: string;
  text: string;
}

interface FormData {
  email: string;
  password: string;
  answer: string;
  country: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {

  @ViewChild('form') form: NgForm;

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

  public formData: FormData;
  isSubmitted: boolean = false;

  public submitForm() {
    console.log('submitted form ', this.form);
    this.isSubmitted = true;
    this.formData = this.form.value;
  }

  public addRandEmail() {
    const randEmail = 'wfm@gmail.com';
    // this.form.setValue({ // Данный метод затрагивает все поля формы.
    //   user: {
    //     password: '',
    //     email: randEmail
    //   },
    //   country: '',
    //   answer: ''
    // });
    this.form.form.patchValue({ // Данный метод устанавливает конкретное значение, которое мы передаем, не задевая другие.
      user: {
        email: randEmail
      }
    });
  }

}
