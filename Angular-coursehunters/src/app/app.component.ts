import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .has-error {
      border: 2px solid hotpink;
    }
    form label {
      width: 100%;
    }
  `],
  providers: []
})
export class AppComponent {
  @ViewChild('form') form: NgForm;

  defaultAnswer = 'no';
  defaultCountry = 'us';

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

  submitForm() {
    this.isSubmited = true;
    this.formData = this.form.value;
    console.log(this.form);
    console.log('form was submitted!');
    this.form.reset();
  }

  addRandomEmail() {
    const randEmail = 'test@gmail.com';

    // setValue перетирает все если пользователь вводил свои какие то данные
    // this.form.setValue({
    //   user: {
    //     pass: '',
    //     email: randEmail
    //   },
    //   country: '',
    //   answer: ''
    // });

    // так мы заменим только поля группы user
    this.form.form.patchValue({
      user: {
        pass: '',
        email: randEmail
      },
    });
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

