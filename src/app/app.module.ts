import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { StudentsComponent } from './pages/students/students.component';
import { PageWrapperComponent } from './shared/components/page-wrapper/page-wrapper.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { MaterialModuleModule } from './shared/modules/material-module.module';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddStudentErrorsComponent } from './shared/errors/add-student-errors/add-student-errors.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CoursesComponent,
    StudentsComponent,
    PageWrapperComponent,
    SidebarComponent,
    AddStudentComponent,
    AddStudentErrorsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModuleModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
