import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseListComponent } from "./component/course-list/course-list.component";
import { CourseComponent } from "./component/course/course.component";
import { LoginPageComponent } from './page/login-page/login-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupPageComponent } from './page/signup-page/signup-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginPageComponent,SignupPageComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
