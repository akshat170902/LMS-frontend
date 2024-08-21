import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from '../footer/footer.component';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../../service/data.service';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-enrolled-courses',
  standalone: true,
  imports: [NavbarComponent, SidebarComponent, FooterComponent, CommonModule, RouterModule],
  templateUrl: './pending-courses.component.html',
  styleUrls: ['./pending-courses.component.css']
})
export class EnrolledCoursesComponent implements OnInit {
  courses: Course[] = [];
  userId: number | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    // Retrieve user data from local storage
    const userJson = localStorage.getItem('user');
    if (userJson) {
      const user = JSON.parse(userJson);
      this.userId = user.id.toString();

      // Fetch enrolled courses for the user
      if (this.userId) {
        this.dataService.getEnrolledCourses(this.userId).subscribe({
          next: (response) => {
            this.courses = response;
            console.log(response);
          },
          error: (error) => {
            console.error('Error fetching pending courses:', error);
          }
        });
      } else {
        console.error('User ID is not available.');
      }
    } else {
      console.error('No user data found in local storage.');
    }
  }
}
