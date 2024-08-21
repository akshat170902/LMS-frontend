import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../component/footer/footer.component';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-create-courses',
  standalone: true,
  imports: [NavbarComponent, FormsModule, CommonModule, FooterComponent, SidebarComponent],
  templateUrl: './create-courses.component.html',
  styleUrl: './create-courses.component.css'
})
export class CreateCoursesComponent {

  constructor(private router: Router, private dataService: DataService) { }

  navigateToLandingPage() {
    this.router.navigate(['/landing-page']);

  }
  durationOptions: string[] = ['0-3 weeks', '3-6 weeks', '6-9 weeks', 'greater than 9 weeks'];

  courseData: any = {
    "courseName": "Introduction to Javbbba",
    "mentorId": 101,
    "description": "Learn the basics of Java programming language.",
    "status": false,
    "mentorName": "John Doe",
    "duration": "4 weeks",
    "url": "https://www.apponix.com/front/images/app-java.jpeg"

  }


  onClickSubmit() {
    this.dataService.createCourse(this.courseData).subscribe(response => {

      console.log(response);
    });
  }
}
