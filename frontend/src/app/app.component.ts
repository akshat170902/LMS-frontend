import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseListComponent } from "./component/course-list/course-list.component";
import { CourseComponent } from "./component/course/course.component";


import { LandingPageComponent } from "./page/landing-page/landing-page.component";

@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, CourseListComponent, CourseComponent, LandingPageComponent],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
