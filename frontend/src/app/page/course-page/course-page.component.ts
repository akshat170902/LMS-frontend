import { Component } from '@angular/core';
import { CourseComponent } from "../../component/course/course.component";
import { QueryComponent } from "../../component/query/query.component";
import { NavbarComponent } from "../../component/navbar/navbar.component";
import { SidebarComponent } from "../../component/sidebar/sidebar.component";

@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [CourseComponent, QueryComponent, NavbarComponent, SidebarComponent],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css'
})
export class CoursePageComponent {

}
