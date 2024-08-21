import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { ActivatedRoute } from '@angular/router';
import { Course } from '../../models/course.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css'] // Corrected from `styleUrl` to `styleUrls`
})
export class CourseComponent implements OnInit {
  course: Course = {
    courseId: 0,
    courseName: '',
    mentorId: 0,
    description: '',
    status: false,
    mentorName: ''
  };
  userLoggedIn : boolean = false;
  isEnrolled: boolean = false;
  courseStatus: 'pending' | 'completed' = 'pending';

  constructor(
    private dataService:DataService,
    private route:ActivatedRoute,
  ){}


  


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.getCourse(Number(id)); // Call the getCourse method to fetch the data
      }
      
    });
    this.checkUserLoggedIn();
  }

  checkUserLoggedIn(): void {
    const token = localStorage.getItem('jwtToken');
    this.userLoggedIn = !!token; // Check if token exists

    if (this.userLoggedIn) {
      const userId = localStorage.getItem('userId'); // Assuming userId is stored in localStorage
      if (userId && this.course) {
        this.checkEnrollmentStatus(userId, this.course.courseId);
      }
    }
  }







  getCourse(id:number):void{
    this.dataService.getCourseById(id).subscribe(data=>{
      this.course=data;
      if (this.userLoggedIn) {
        const userId = localStorage.getItem('userId');
        if (userId) {
          this.checkEnrollmentStatus(userId, id);
        }
      }
    });
  }



  checkEnrollmentStatus(userId: string, courseId: number): void {
    this.dataService.isUserEnrolled(userId, courseId).subscribe(enrolled => {
      this.isEnrolled = enrolled;
      if (enrolled) {
        this.getCourseProgress(userId, courseId);
      }
    });
  }




  getCourseProgress(userId: string, courseId: number): void {
    this.dataService.getCourseProgress(userId, courseId).subscribe(status => {
      this.courseStatus = status;
    });
  }





  enrollInCourse(): void {
    const userId = localStorage.getItem('userId');
    if (userId && this.course) {
      this.dataService.enrollUser(userId, this.course.courseId).subscribe(() => {
        this.isEnrolled = true;
        this.courseStatus = 'pending';
      });
    }
  }



  startCourse(): void {
    console.log('Starting course...');
  }

  markAsComplete(): void {
    const userId = localStorage.getItem('userId');
    if (userId && this.course) {
      this.dataService.completeCourse(userId, this.course.courseId).subscribe(() => {
        this.courseStatus = 'completed';
      });
    }
  }


}
