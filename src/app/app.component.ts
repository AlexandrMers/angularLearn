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
        email: new FormControl('', [Validators.required, Validators.email], this.checkMatchEmail), // Асинхронные валидаторы передаются третьим аргументом!
        password: new FormControl('', [Validators.required, this.checkForLength]),
      }),
      country: new FormControl('ru'),
      answer: new FormControl('no')
    });
  }

  public submitForm() {
    console.log('submitted ', this.form);
  };

  public checkForLength(control: FormControl) {
    if(control.value.length <= 6) {
      return {
        'errorLength': true
      }
    }
    return null;
  }

  public checkMatchEmail(control: FormControl): Promise<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if(control.value === 'test@mail.ru') resolve({
          isUsed: true
        });
        resolve(null);
      }, 3000);
    });
  }
}

