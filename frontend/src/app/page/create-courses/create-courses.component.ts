import { Component } from '@angular/core';
import { NavbarComponent } from '../../component/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../../component/footer/footer.component';
import { SidebarComponent } from '../../component/sidebar/sidebar.component';

@Component({
  selector: 'app-create-courses',
  standalone: true,
  imports: [NavbarComponent,FormsModule,CommonModule,FooterComponent,SidebarComponent],
  templateUrl: './create-courses.component.html',
  styleUrl: './create-courses.component.css'
})
export class CreateCoursesComponent {


  durationOptions: string[] = ['0-3 hours', '3-6 hours', '6-9 hours', 'greater than 9 hours'];

  courseData: any={
    title:'',
    description:'',
    duration:'',
    Prerequisites:'',
    mentors:'' ,
    upload:''
  }
}
