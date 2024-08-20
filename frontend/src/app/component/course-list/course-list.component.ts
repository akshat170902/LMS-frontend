import { Component, Input } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';
import { CourseCountComponent } from '../course-count/course-count.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCountComponent,FormsModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {

  categories: any[] = [];

  type = ''

  constructor(private dataService: DataService) {
    this.dataService.getCategories(this.type).subscribe(response => {
      this.categories = response;
      console.log(response);
    })
  }


  getAllCourses() {
    this.dataService.getCategories("").subscribe(response => {
      this.categories = response;
      console.log(response);
    })
  }

  getAllPendingCourses() {
    this.dataService.getCategories('pending').subscribe(response => {
      this.categories = response;
      console.log(response);
    })
  }

  getAllCompletedCourses() {
    this.dataService.getCategories('complted').subscribe(response => {
      this.categories = response;
      console.log(response);
    })
  }


}



