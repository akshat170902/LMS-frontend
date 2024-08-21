import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../component/footer/footer.component';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-courses',
  standalone: true,
  imports: [NavbarComponent,FormsModule,CommonModule,FooterComponent,SidebarComponent],
  templateUrl: './create-courses.component.html',
  styleUrl: './create-courses.component.css'
})
export class CreateCoursesComponent {

constructor(private router:Router){}

navigateToLandingPage(){
  this.router.navigate(['/landing-page']);
 
}
  durationOptions: string[] = ['0-3 weeks', '3-6 weeks', '6-9 weeks', 'greater than 9 weeks'];

  courseData: any={
    courseName:'',
    description:'',
    duration:'',
    mentorName:'',
    url:'',
    status:false,
    mentorId:0,

  }
}
