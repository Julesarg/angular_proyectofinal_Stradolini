import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent {
  nameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.pattern('[a-zA-Z ]*'),
  ]);

  lastNameControl = new FormControl('', [
    Validators.required,
    Validators.pattern('[a-zA-Z ]*'),
  ]);

  emailControl = new FormControl('', [Validators.required, Validators.email]);

  genderControl = new FormControl('', [Validators.required]);

  registerForm = new FormGroup({
    firstName: this.nameControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
  });
}
