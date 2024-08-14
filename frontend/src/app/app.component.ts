import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CourseListComponent } from "./component/course-list/course-list.component";
import { ProfilePageComponent } from './page/profile-page/profile-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CourseListComponent, ProfilePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
}
