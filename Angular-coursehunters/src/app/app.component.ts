import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: []
})
export class AppComponent {

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

  submitForm(form: NgForm) {
    console.log(form);
    console.log('form was submitted!');
  }

  // submitForm() {
  //   console.log(this.form);
  // }
}

