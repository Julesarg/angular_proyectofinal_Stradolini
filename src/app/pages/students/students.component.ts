import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Student } from 'src/app/models/students.model';
import { AddStudentComponent } from '../add-student/add-student.component';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent {

  students: Student[] = [
    new Student(1, 'Juan', 'Perez', 'asdsad@hotmail.com', 'M', true, true),
    new Student(2, 'Analia', 'Rodriguez', 'asdsad@hotmail.com', 'F', true, true),
    new Student(3, 'Zacarias', 'Fernandez', 'asdsad@hotmail.com', 'M', true, true),
    new Student(4, 'Graciela', 'Hernandez', 'asdsad@hotmail.com', 'F', true, true)
  ]

  displayedColumns = ['id', 'name', 'lastName', 'email', 'gender', 'edit', 'deleteOption']

  constructor(private readonly dialogService: MatDialog) { }

  addStudent() {
    this.dialogService.open(AddStudentComponent)
  }
}