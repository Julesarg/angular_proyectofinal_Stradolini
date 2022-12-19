import { Component } from '@angular/core';
import { AddStudentErrorsComponent } from '../../shared/errors/add-student-errors/add-student-errors.component';
import { FormGroup } from '@angular/forms';
import {
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss'],
})
export class AddStudentComponent {
  profilepicControl = new FormControl('', [Validators.required]);

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
    profilepic: this.profilepicControl,
    lastName: this.lastNameControl,
    email: this.emailControl,
    gender: this.genderControl,
  });

  constructor(private readonly dialogRef: DialogRef) { }

  closeWindow() {
    this.dialogRef.close()
  }

}

