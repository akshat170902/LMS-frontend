import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course.model';
import { CommonModule } from '@angular/common';
import { QueryComponent } from '../query/query.component';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, QueryComponent],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  course: Course = {
    courseId: 0,
    courseName: '',
    mentorId: 0,
    description: '',
    status: false,
    mentorName: '',
    duration: '',
    url: ''
  };
  userLoggedIn: boolean = false;
  isEnrolled: boolean = false;
  courseStatus: boolean = false; // Changed to boolean to reflect the correct status

  answeredQueries: any[] = [];
  pendingQueries: any[] = [];

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.course.courseId=Number(id);
      if (id) {
        this.getCourse(Number(id));
      }
    });
    this.checkUserLoggedIn();
  }

  checkUserLoggedIn(): void {
    const token = localStorage.getItem('jwtToken');
    this.userLoggedIn = !!token;

    if (this.userLoggedIn && this.course.courseId) {
      const userId = localStorage.getItem('userId');
      if (userId) {
        this.checkEnrollmentAndCompletionStatus(userId, this.course.courseId);
      }
    }
  }

  getCourse(id: number): void {
    this.dataService.getCourseById(id).subscribe(
      response => {
        console.log('Response:', response);
        this.course = response.course;
        this.answeredQueries = response.DoubtList.filter((doubt: any) => doubt.answers && doubt.answers.trim() !== '');
        this.pendingQueries = response.DoubtList.filter((doubt: any) => !doubt.answers || doubt.answers.trim() === '');

        if (this.userLoggedIn) {
          const userId = localStorage.getItem('userId');
          if (userId) {
            this.checkEnrollmentAndCompletionStatus(userId, id);
          }
        }
      },
      error => {
        console.error('Error fetching course:', error);
      }
    );
  }

  checkEnrollmentAndCompletionStatus(userId: string, courseId: number): void {
    this.dataService.getEnrolledAndProgressStatus(Number(userId), courseId).subscribe(response => {
      this.isEnrolled = response.isEnrolled;
      if (this.isEnrolled) {
        this.courseStatus = response.completionStatus;
      }
    });
  }


  enrollInCourse(): void {
    const userId = localStorage.getItem('userId');
    if (userId && this.course) {
      this.dataService.setEnrollCourse(Number(userId), this.course.courseId).subscribe(() => {
        this.isEnrolled = true;
        this.courseStatus = false; // Set to false when first enrolling, meaning 'in progress'
      });
    }
  }

  markAsComplete(): void {
    const userId = localStorage.getItem('userId');
    if (userId && this.course) {
      this.dataService.setCompleteCourse(Number(userId), this.course.courseId).subscribe(() => {
        this.courseStatus = true; // Set to true when the course is marked as complete
      });
    }
  }
}
