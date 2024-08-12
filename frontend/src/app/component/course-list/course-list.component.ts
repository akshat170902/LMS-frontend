import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
    categories: any[]=[];
    constructor(private dataService : DataService){
      this.dataService.getCategories().subscribe(response=>{
        this.categories=response;
        console.log(response);
      })

    }

}
