import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseListComponent } from "./component/course-list/course-list.component";
import { CourseComponent } from "./component/course/course.component";
import { LoginPageComponent } from './page/login-page/login-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupPageComponent } from './page/signup-page/signup-page.component';
import { LandingPageComponent } from "./page/landing-page/landing-page.component";
import { CreateCoursesComponent } from './page/create-courses/create-courses.component';
import { ProfilePageComponent } from './page/profile-page/profile-page.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseListComponent, ProfilePageComponent,SidebarComponent,ProfilePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{
  title='frontend';

}