import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseListComponent } from "./component/course-list/course-list.component";
<<<<<<< HEAD
import { CourseComponent } from "./component/course/course.component";
import { LoginPageComponent } from './page/login-page/login-page.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SignupPageComponent } from './page/signup-page/signup-page.component';
import { LandingPageComponent } from "./page/landing-page/landing-page.component";
import { CreateCoursesComponent } from './page/create-courses/create-courses.component';
=======
import { ProfilePageComponent } from './page/profile-page/profile-page.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
>>>>>>> e7bf059e98901750b6a93ba61c5732a9bcafb061


@Component({
  selector: 'app-root',
  standalone: true,
<<<<<<< HEAD
  imports: [RouterOutlet, CourseListComponent, CourseComponent, LandingPageComponent,CreateCoursesComponent],
=======
  imports: [RouterOutlet, CourseListComponent, ProfilePageComponent,SidebarComponent,ProfilePageComponent],
>>>>>>> e7bf059e98901750b6a93ba61c5732a9bcafb061
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent{
  title='frontend';

}