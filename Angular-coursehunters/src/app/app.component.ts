import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    form label {
      width: 100%;
    }
    form .has-error {
      border: 2px solid mediumpurple;
    }
  `],
  providers: []
})
export class AppComponent implements OnInit {
  form: FormGroup;

  // @ViewChild('form') form: NgForm;
  answers = [
    {
      type: 'yes',
      text: 'Yes'
    },
    {
      type: 'no',
      text: 'No'
    }
  ];

  passLength = 5;

  // Validators.required без () потому что мы передаем метод а не вызываем
  // bind нужен для того что б передать контекст, особенно если будет вызыватся в других классах
  ngOnInit(): void {
    this.form = new FormGroup({
      user: new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email], this.checkForEmail),
        pass: new FormControl('', [Validators.required, this.checkForLength.bind(this.passLength)]),
      }),
      country: new FormControl('us'),
      answer: new FormControl('no')
    });
  }

  onSubmit() {
    console.log('Submitted', this.form);
  }

  // должен ворзращать или ничего(если все ок) или объект{'errorCode': true}
  checkForLength(control: FormControl) {
    if (control.value.length <= this.passLength) {
      return {
        'lengthError': true,
      };
    }
    return null;
  }

  // вернуть объект Promise любого типа
  checkForEmail(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      // здесь пишем наш асинхронный код
      setTimeout(() => {
        // этот код сработает через 3 секунды
        if (control.value === 'test@mail.ru') {
          // есил имейл совпал с тестовым то возвращаем ошибку
          resolve({
            'emailIsUsed': true,
          });
        } else {
          // ошибки нет вернуть null
          resolve(null);
        }
      }, 3000);
    });
  }

  // submitForm() {
  //   console.log(this.form);
  // }
}

