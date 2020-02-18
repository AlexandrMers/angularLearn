import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

interface AnswerInterface {
  type: string;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

  public form: FormGroup;

  ngOnInit(): void {
    // Инициализация формы...
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });
  }

  public submitForm() {
    console.log('submitted ', this.form);
  };
}

