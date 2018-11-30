import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

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

  formData = {}; // empty object
  isSubmited = false;

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

  // submitForm() {
  //   console.log(this.form);
  // }
}

